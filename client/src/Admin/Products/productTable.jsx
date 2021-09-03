import axios from "axios";
import {Link, useHistory} from "react-router-dom"
import React, { useEffect, useState } from "react";
import "../Products/products.css";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const ProductTable = () => {
   
    const [state, setState] = useState([])
    const history = useHistory() ;
    const products = async() => {
        console.log("jii")
        const response = await axios.get("http://Localhost:8001/api/product/getAllProducts");
        console.log("response", response);
        const products = response.data
        setState(products);
    }
    const deleteProduct = async (_id) => {
        try {
            const response = await axios.delete(`http://localhost:8001/api/product/deleteProduct/${_id}`)
            console.log("response: ", response)
            toast.success("deleted product succesfully !!")
        } catch (error) {
            console.log("error", error.response);
        }
    }

    useEffect(() => {
        products()
    }, [])

    return (
        <div className="products">
            <h1>PRODUCTS TABLE</h1>
            <div className="productTable">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Image url</th>
                        <th>Cut price</th>
                        <th>Price</th>
                        <th>Book Type</th>
                        <th>Created at</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((data, index) => {
                        return (
                            <tr className="productTable">
                                <td>{index + 1}</td>
                                <td>{data.bookName}</td>
                                <td>{data.author}</td>
                                <td>{data.image}</td>
                                <td>{data.price}</td>
                                <td>{data.cutPrice}</td>
                                <td>{data.bookType}</td>
                                <td>{data.createdAt}</td>
                                <td><i  onClick={() => {
                                    history.push({
                                        pathname:"/Admin/home/productsList/editProduct",
                                        state:data 
                                    }) ;
                                }} class="far fa-edit" ></i></td>
                                <td ><i onClick={()=>{deleteProduct(data._id)}} class="fas fa-trash-alt"></i></td>
                            </tr>
                        )
                    })}
                </tbody>
            </div>
        </div>
    )
}
export default ProductTable