import React from "react";
import { Link } from "react-router-dom"
import "../user-navbar/navbar.css";

function navbar() {
    return (
        <div className="navbar">
            <Link to="/"> <i class="fas fa-home"></i></Link>
            <Link to="" className="dropdown"><button className="dropbtn">Books</button> <i class="fas fa-caret-down"></i>
                <div className="dropdown-content">
                    <Link to="/bestsellers">BestSellers</Link>
                    <Link to="/NewArrival">New Arrivals</Link>
                    <Link to="/TextBooks">Text Books</Link>
                </div></Link>
            <Link to="/NewArrival">New Arrivals</Link>
            <Link to="/bestsellers">Bestsellers</Link>
            <Link to="/TextBooks">TextBooks</Link>
            <Link to="/Featured Authors" className="author">Featured Authors</Link>

        </div>
    )
}
export default navbar;