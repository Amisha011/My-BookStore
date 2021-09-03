const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcryptjs`);
//import product controller..
const Product = require(`../models/product.schema`);
const { request, response } = require("express");

//add a new product

const addProduct = async (request, response) => {
    console.log("hello world")
    const { bookName, author, price, cutPrice, bookType, image } = request.body;
    console.log("body: ", request.body);
    // const userType = request.user.userType;
    // console.log(userType,"juuhhkb")
    // if (userType == "user") {
    //     return response.status(404).json({ error: "Admin can only add the product" });
    // }
    try {
        const isExist = await Product.findOne({ bookName });
        if (isExist) {
            return response.status(400).json("book already exist");
        }
        const product = new Product({
            bookName,
            price,
            author,
            cutPrice,
            bookType,
            image,
        });
        await product.save()
        console.log("suucess")
        response.status(201).json({ product });
    }
    catch (error) {
        console.log("error  ", error);
        return response.status(500).json("Something went wrong !!")
    }
}
exports.addProduct = addProduct;

//gett all products

const getAllProducts = async (request, response) => {
    try {
        const products = await Product.find()
        response.status(201).json(products);
    }
    catch (error) {
        console.log("error in getting products", error)
    }
}
exports.getAllProducts = getAllProducts;

//update a product

const updateProduct = async (request, response) => {
    const _id = request.params.id;
    const data = request.body;
    try {
        const product = await Product.findByIdAndUpdate(
            { _id },
            { $set: data },
            { new: true }
        )
        if (!product) {
            return response.status(404).json("product not found");
        }
        return response.status(200).json(product);
    } catch (error) {
        console.log(error, "error :")
    }
}

exports.updateProduct = updateProduct;

//delete a product

const deleteProduct = async (request, response) => {
    const _id = request.params.id;
    try {
        const product = await Product.findByIdAndDelete({ _id });
        if (!product) {
            return response.status(404).json("Product does not exist ");
        }
        response.status(200).json(product);

    } catch (error) {
        console.log("error", error);
    }
}
exports.deleteProduct = deleteProduct;
