import React from "react";
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const token = localStorage.getItem("token");
const BuyNow = async (productId) => {
    console.log("id",productId)
    try {
        const response = await axios.post(`http://localhost:8001/api/orders/placeOrder?productId=${productId}`, {}, { headers: { "Authorization": `Bearer ${token}` } })
        console.log("response of buy now  ", response);
        toast.success("Successfully Placed order");

    } catch (error) {
        console.log(error, "error")
        toast.error("error occured in adding product")
    }
}
export default BuyNow