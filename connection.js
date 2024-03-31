const mongoose=require('mongoose');

const connectToDB= async(url)=>{
    return mongoose.connect(url);
}

module.exports={
    connectToDB,
}