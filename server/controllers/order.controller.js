const { request, response } = require("express");
const Order = require("../models/orders.schema");

//localhost
const placeOrder = async (request, response, next) => {
    const { productId } = request.query;
    const user = request.user;
    const _id = user._id;
    try {
        const order = new Order({ product: productId, owner: { _id } });
        await order.save();
        response.json({ message: "congratulations !! Placed order succesfully" });
    } catch (error) {
        console.log(error, "error")
        response.status(500).json("something went wrong in placing order!!");
    }

};
const myOrders = async (request, response, next) => {
    const user = request.user;
    const _id = user._id;
    console.log("id", _id)
    try {
        console.log("koo")
        const orders = await Order.find({ owner: _id })
            .populate("owner")
            .populate("product");
        response.status(201).json(orders);
    }
    catch (error) {
        response.status(500).json({ error: "something went wrong in getting my orders!!" });
    };
}
exports.placeOrder = placeOrder;
exports.myOrders = myOrders;

const getAllOrders = async (req,res) => {
    const user = req.user; //accessing user from authorization
    try {
        const orders = await Order.find().populate("owner").populate("product");
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: "Something went wrong!" });
    }
};
exports.getAllOrders = getAllOrders