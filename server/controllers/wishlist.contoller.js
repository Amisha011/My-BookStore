const { response, request } = require("express");
const Wishlist = require("../models/wishlist.schema");

const addToWishlist = async (request, response, next) => {
    const { productId } = request.query;
    const user = request.user;
    const _id = user._id;

    try {
        const wishlistOrder = new Wishlist({ product: productId,owner: { _id } });
        console.log("wishlist orders",wishlistOrder);
        await wishlistOrder.save();
        console.log("hello")
        response.status(201).json("Congrates !! Added to wishlist");
    } catch (error) {
        console.log("error in adding to wishlist", error);
        response.status(401).json({ error: "something went wrong in adding order to wishlist" });
    }
}

//get my wishlist
const myWishlist = async (request, response, next) => {
    const user = request.user;
    const _id = user._id;
    try {
        const wishlistOrders = await Wishlist.find({ owner: _id })
            .populate("owner")
            .populate("product");
            response.status(201).json(wishlistOrders);
    }

    catch(error)
    {
        console.log("error in getting my wishlist :",error);
        response.status(401).json({error:"Something went wrong"});
    }
}
exports.addToWishlist=addToWishlist;
exports.myWishlist=myWishlist;