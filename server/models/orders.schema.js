const mongoose = require("mongoose");
//const { schema } = require("./product.schema");
const Schema = mongoose.Schema;

//creating schema
const orderSchema = new Schema({
    product: 
    {
        type: String,
        ref: "Product",//pass id 
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User" //user modal;
    }
}, { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;