import React, { useEffect, useState } from "react";
import axios from "axios"
import "../common-products-css/commonProducts.css"
import buyNow from "../commonFunction/buyNow"


const token = localStorage.getItem("token")

const Mywishlists = () => {
    const [myWishlistData, setMyWishlistData] = useState([])
    const wishlists = async () => {
        const response = await axios.get(`http://localhost:8001/api/wishlist/getMyWishlist`, { headers: { "Authorization": `Bearer ${token}` } })
        console.log("response of ", response);
        const data = response.data
        console.log("data", data)
        setMyWishlistData(data);
    }
    useEffect(() => {
        wishlists();
    }, [])

    return (
        <div className="parent-div">
            <h2>My Wishlist</h2>
            {myWishlistData.map((details, index) => {
                return (
                    <div className="container-of-page">
                        {/* // <h2>New Arrival {index + 1}</h2> */}


                        <div className="product-card">
                            <div className="product-image">
                                <img src={details.product.image} alt="product image"></img>
                            </div>
                            <div className="product-details">
                                <h3>{details.product.bookName}</h3>
                                <h4>{details.product.author}</h4>
                                <div className="products-price">
                                    <span className="product-discountPrice">Rs.{details.product.price}</span>
                                    <span className="product-price">{details.product.cutPrice}</span>
                                </div>
                            </div>
                            <div className="product-btns">
                                <button className="product-buy" onClick={() => buyNow(details._id)}><i class="fas fa-shopping-bag"></i>           Buy Now</button>
                            </div>

                        </div>

                    </div>
                )
            })}
        </div>

    )
}


export default Mywishlists;