import React, { useEffect, useState } from "react";
// import ProductTable from "../Products/productTable"
import axios from "axios";
import "../Products/products.css";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const Product = () => {
    // const [product, setProduct] = useState([]);
    const [productFormData, setProductFormData] = useState({
        bookName: "",
        price: "",
        image: "",
        author: "",
        cutPrice: "",
        bookType: "",

    })
    // const [productId, setProductId] = useState(" ");
    // useEffect(() => {
    //     fetchProducts();
    // }, []);

    const changeProductFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProductFormData({ ...productFormData, [name]: value });
    };

    //post api for adding product in table

    const addProduct = async () => {
        console.log("heyy")
        try {
            console.log("productFormData", productFormData);
            const response = await axios.post("http://localhost:8001/api/product/addProduct", productFormData)
            console.log("response :", response);
            toast.success("Successfully Added product");
        } catch (error) {
            console.log("error", error);
            toast.error("Failed in adding product");
        }
    }
    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData()
        data.append('file', files[0]);
        data.append('upload_preset', 'eyowpxag')
        // setLoading(true);

        const res = await fetch("https://api.cloudinary.com/v1_1/ddcy8imkx/image/upload", {
            method: 'POST',
            body: data
        })
        const file = await res.json();
        console.log(file);
        return file.secure_url;
        // setImagestate(file.secure_url)

        //setLoading(false)
    }

    return (
        <div style={{ backgroundColor: "cadetblue", padding: "10px" }}>
            <div className="productDetails">
                <h1>ADD PRODUCT DETAILS </h1>

                <input
                    type="text"
                    name="bookName"
                    placeholder="bookName"
                    value={productFormData.bookName}
                    onChange={changeProductFormData}>

                </input>

                <input
                    style={{ backgroundColor: "white", borderColor: "-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))", borderImage: "initial", color:"gray" }}
                    border
                    type="file"
                    name="image"
                    placeholder="image url"
                    onChange={async (e) => {
                        const url = await uploadImage(e)
                        setProductFormData({ ...productFormData, ["image"]: url });
                        console.log("url", url);

                    }}></input>

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

                <select
                    type="text"
                    name="bookType"
                    placeholder="bookType"
                    value={productFormData.bookType}
                    onChange={changeProductFormData}>

                    <option value="select a bookType">Select a bookType</option>
                    <option value="bestSellers">bestSellers</option>
                    <option value="newArrivals">newArrivals</option>
                    <option value="textBooks">textBooks</option>
                </select>

                <button onClick={addProduct} >ADD PRODUCT </button>
                {/* <button onClick={updateProduct}>Update Product</button> */}

            </div>
            {/* < ProductTable data={product} updateProductData={updateProductData} deleteProduct={deleteProduct} /> */}
        </div>
    )
}
export default Product;