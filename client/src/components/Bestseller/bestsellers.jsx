import axios from "axios";
import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom' ;
import "../common-products-css/commonProducts.css";
import buyNow from "../commonFunction/buyNow"
import wishList from "../commonFunction/wishlist";
const Bestseller = () => {
    const [bestSellers, setBestSellers] = useState([]);
    const isLoggedIn = localStorage.getItem('isLoggedIn') ;
    const history = useHistory() ;
    const getBestSeller = async () => {
        const response = await axios.get("http://Localhost:8001/api/product/getAllProducts");
        console.log("response of bestseller", response);
        const arrayOfData = []
        for (let book of response.data) {
            if (book.bookType === "bestSellers") {
                arrayOfData.push(book)
            }
        }
        setBestSellers(arrayOfData);

    }
    useEffect(() => {
        getBestSeller()
    }, [])

    return (
        <div>
             <h2 className="product-heading">bestseller</h2>
            <div className="parent-div">
            {bestSellers.map((data, index) => {
                return (
                    <div className="container-of-page">
                        <div className="product-card">
                            <div className="product-image">
                                <img src={data.image} alt="product image"></img>
                            </div>
                            <div className="product-details">
                                <h3>{data.bookName}</h3>
                                <h4>{data.author}</h4>
                                <div className="products-price">
                                    <span className="product-discountPrice">Rs.{data.price}</span>
                                    <span className="product-price">{data.cutPrice}</span>
                                </div>
                            </div>
                            <div className="product-btns">
                                <button className="product-wishlist" onClick={() => wishList(data._id)}> <i class="far fa-heart"> </i></button>

                                <button className="product-buy" onClick={() => {
                                    if(!isLoggedIn || isLoggedIn == 'false'){
                                        return history.push('/Login') ;
                                    }
                                    buyNow(data._id)
                                }}><i class="fas fa-shopping-bag"></i>           Buy Now</button>
                            </div>

                        </div>

                    </div>
                )
            })}
        </div>
        </div>
    )
}
export default Bestseller;
