const express=require('express');
const {handleGenerateNewShortURL,handleGetAnalytics,handleShortId}=require('../controllers/url')

const router=express.Router();

router.post("/",handleGenerateNewShortURL);

router.get("/analytics/:shortId",handleGetAnalytics);

router.get("/:shortId",handleShortId);

module.exports=router;