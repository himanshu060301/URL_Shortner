const express=require('express');
const path=require('path');
const cookieParser=require('cookie-parser');
const {connectToDB}=require('./connection');
const { restrictToLoggedinUserOnly,checkAuth } = require("./middlewares/auth");
const URL=require('./models/url');
const urlRoute=require('./routes/url');
const staticRoute=require('./routes/staticRouter');
const userRoute=require('./routes/user');

const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO;
connectToDB(MONGO_URL).then(console.log("MongoDB connected."));

const app=express();
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use("/url",restrictToLoggedinUserOnly,urlRoute);
app.use("/user",userRoute);
app.use("/",checkAuth,staticRoute);

app.get('/url/:shortId', async(req,res)=>{
    const shortId=req.params.shortId;
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            }
        );
        if (!entry) {
            return res.status(404).send("URL not found");
        }
        res.redirect(entry.redirectURL);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT,()=>console.log(`Server Started at PORT:${PORT}`));