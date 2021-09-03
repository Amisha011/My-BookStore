import React from "react";
//import ReactDom from "react-dom";
// import { Route, Link } from "react-router-dom"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "../homepage/homepage.css"
import image1 from "../../images/homeimg1.jpg";
import image2 from "../../images/homeimg2.jpg";
import image3 from "../../images/homeimg3.jpg";
import bestsellerImg1 from "../../images/bs1.jpg";
import bestsellerImg2 from "../../images/bs2.jpg";
import bestsellerImg3 from "../../images/bs3.jpg";
import bestsellerImg4 from "../../images/bs4.jpg";
import bestsellerImg5 from "../../images/bs5.jpg"
import newArrivalImg1 from "../../images/newarrival1.jpg"
import newArrivalImg2 from "../../images/newarrival2.jpg"
import newArrivalImg3 from "../../images/newarrival3.jpg"
import newArrivalImg4 from "../../images/newarrival4.jpg"
import newArrivalImg5 from "../../images/newarr5.jpg"
import authorImg1 from "../../images/author1.jpg";
import authorImg2 from "../../images/author2.jpg";
import authorImg3 from "../../images/author3.jpg";
import authorImg4 from "../../images/author4.jpg";
import authorImg5 from "../../images/author5.jpg"

function homePage() {
    return (
        <div className="home">
            <div className="slider">
                <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src={image1} alt="bookstore" className="sliderimg" />
                    <img src={image2} alt="bookstore" className="sliderimg" />
                    <img src={image3} alt="bookstore" className="sliderimg" />
                </AliceCarousel>
            </div>
            <div className="sec1">
                <b>Bestsellers</b>
                <div className="books">
                    <div className="bsbooks">
                        <img src={bestsellerImg1 } alt="bookstore"></img>
                        <h3>Rs.349</h3>
                        <p>The secret of the Nagas</p>
                        <span>Amish Tripathi</span>
                    </div>
                    <div className="bsbooks">
                        <img src={bestsellerImg2} alt="bookstore"></img>
                        <h3>Rs.349</h3>
                        <p>The Immortals of Muleha</p>
                        <span>Amish Tripathi</span>
                    </div>
                    <div className="bsbooks">
                        <img src={bestsellerImg3} alt="bookstore"></img>
                        <h3>Rs.1,124</h3>
                        <p>Reflections Of A Man</p>
                        <span>Amari Soul</span>
                    </div>
                    <div className="bsbooks">
                        <img src={bestsellerImg4} alt="bookstore"></img>
                        <h3>Rs.135</h3>
                        <p>The Poer Of Your  Mind</p>
                        <span>Murphy Joseph Dr</span>
                    </div>
                    <div className="bsbooks">
                        <img src={bestsellerImg5} alt="bookstore"></img>
                        <h3>Rs.279</h3>
                        <p>Scion of Ikshvaku</p>
                        <span>Amish Tripathi</span>
                    </div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <hr/>
            </div>
        {/* new arrivals section 2 */}
            <div className="sec1">
                <b>New Arrivals</b>
                <div className="books">
                    <div className="bsbooks">
                        <img src={newArrivalImg1} alt="bookstore"></img>
                        <h3>Rs.468</h3>
                        <p>The Copycat</p>
                        <span>Wendy McLeod Macknight</span>
                    </div>
                    <div className="bsbooks">
                        <img src={newArrivalImg2} alt="bookstore"></img>
                        <h3>Rs.929</h3>
                        <p>The Rose Code</p>
                        <span>Kate Quinn</span>
                    </div>
                    <div className="bsbooks">
                        <img src={newArrivalImg3} alt="bookstore"></img>
                        <h3>Rs.1,310</h3>
                        <p>The Fourth Child</p>
                        <span>Jessica Winter</span>
                    </div>
                    <div className="bsbooks">
                        <img src={newArrivalImg4} alt="bookstore"></img>
                        <h3>Rs.901</h3>
                        <p>The Bone Maker</p>
                        <span>Sarah Beth Durst</span>
                    </div>
                    <div className="bsbooks">
                        <img src={newArrivalImg5} alt="bookstore"></img>
                        <h3>Rs.1,407</h3>
                        <p>Foregone</p>
                        <span>HarperCollins</span>
                    </div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <hr />
            </div>
            {/* Featured authors section 3 */}
            <div className="sec1">
                <b>Featured Authors</b>
                <div className="authors">
                    <div className="Fauthors">
                        <img src={authorImg1} alt="bookstore"></img>
                        <p>GAYLE FORMAN</p>
                    </div>
                    <div className="Fauthors">
                        <img src={authorImg2} alt="bookstore"></img>
                        <p>ERICH SEGAL</p>
                       
                    </div>
                    <div className="Fauthors">
                        <img src={authorImg3} alt="bookstore"></img>
                     
                        <p>SYLVIA PLATH</p>
                    
                    </div>
                    <div className="Fauthors">
                        <img src={authorImg4} alt="bookstore"></img>
                        <p>SHASHI THAROOR</p>
                    </div>
                    <div className="Fauthors">
                        <img src={authorImg5}alt="bookstore"></img>
                        <p>GILLIAN FLYNN</p>
                    </div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <hr/>
            </div>
        </div>
        )
}
export default homePage;