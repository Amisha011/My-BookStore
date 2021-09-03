const express=require("express");
const { Mongoose } = require("mongoose");
const wishlist=require("../controllers/wishlist.contoller");
const router=express.Router();
const auth=require("../middlewares/auth");

router.post('/addToWishlist',auth,wishlist.addToWishlist);
router.get('/getMyWishlist',auth,wishlist.myWishlist);

module.exports=router;