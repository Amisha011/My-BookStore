import React, { useState, useEffect } from "react";
import axios from 'axios'

import "../Products/products.css";
import { toast } from "react-toastify";

const EditProduct = ({ location }) => {
    const product = location.state;
    const [productFormData, setProductFormData] = useState({
        bookName: product.bookName,
        price: product.price,
        image: product.image,
        author: product.author,
        cutPrice: product.cutPrice,
        bookType: product.bookType,

    })
    const [productId, setProductId] = useState(" ");
    const changeProductFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProductFormData({ ...productFormData, [name]: value });
    };

    const updateProduct = async () => {
        console.log(productFormData);
        console.log(productId);
        try {
            const response = await axios.put(`http://localhost:8001/api/product/updateProduct/${product._id}`, productFormData);
            toast.success("Successfully Updated product !!");
        } catch (error) {
            console.log("error", error.response);
            toast.error("error occured in editing product details")
        }
    }
    useEffect(() => {
        console.log("hello")
    }, [])

    return (
        <div>
            <div className="productDetails">
                <h1>UPDATE PRODUCT DETAILS </h1>

                <input
                    type="text"
                    name="bookName"
                    placeholder="bookName"
                    value={productFormData.bookName}
                    onChange={changeProductFormData}></input>


                <input
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={productFormData.image}
                    onChange={changeProductFormData}></input>

                <input
                    type="text"
                    name="author"
                    placeholder="Author Name"
                    value={productFormData.author}
                    onChange={changeProductFormData}></input>

                <input
                    type="number"
                    name="cutPrice"
                    placeholder="cut price"
                    value={productFormData.cutPrice}
                    onChange={changeProductFormData}></input>

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={productFormData.price}
                    onChange={changeProductFormData}></input>

                <input
                    type="text"
                    name="bookType"
                    placeholder="bookType"
                    value={productFormData.bookType}
                    onChange={changeProductFormData}></input>

                {/* <button onClick={addProduct} >ADD PRODUCT </button> */}
                <button onClick={updateProduct}>Update Product</button>

            </div>
            {/* < ProductTable data={product} updateProductData={updateProductData} deleteProduct={deleteProduct} /> */}
        </div>
    )
}
export default EditProduct;