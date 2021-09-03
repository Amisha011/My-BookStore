const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const productSchema = new Schema({
    bookName: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    cutPrice:{
        type:Number,
    },
    bookType: {
      type:String,  
    },

},
    { timestamps: true }
)
module.exports = mongoose.model("Product", productSchema);