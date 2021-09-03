import React from "react";
import "../Admin-homePage/adminHomePage.css";
import { Link } from "react-router-dom"

const adminHomePage = () => {
    return (
        <div className="adminHomePage">
            <div className="adminContainer">
                <div>
                    <button><Link to="/Admin/home/GetAllUsers">Users Table</Link></button>
                    <button><Link to="/Admin/home/addProduct">Add Product</Link></button>
                </div>
                <div>
                    <button> <Link to="/Admin/home/ProductTable">Products list</Link></button>
                    <button><Link to="/Admin/home/getAllOrders">All orders list</Link></button>
                </div>
            </div>

        </div>

    )
}
export default adminHomePage;