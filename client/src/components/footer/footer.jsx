import React from "react";
import "../footer/footer.css";
import { Link } from 'react-router-dom'

function footer() {
    return (
        <div className="Footerr">
            <div className="footer">
                <div className="row">
                    <h3 className="headingOfFooter">Policies</h3>
                    <p className="dataOfFooter">Privacy Policy</p>
                    <p className="dataOfFooter">Terms Of Use</p>
                    <p className="dataOfFooter">Secure Shopping</p>
                </div>
                <div className="row">
                    <h3 className="headingOfFooter">Help</h3>
                    <p className="dataOfFooter">Payment</p>
                    <p className="dataOfFooter">Return</p>
                    <p className="dataOfFooter">FAQ</p>
                </div>
                <div className="row3">
                    <h3 className="headingOfFooter">Follow Us</h3>
                    <i class="fab fa-facebook-f"></i>
                    <a href="https://www.instagram.com/" > <i class="fab fa-instagram"></i></a>
                    <a href="www.linkedin.com/in/ardent011"><i class="fab fa-twitter"></i></a>
                    <i class="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div className="address">
                <hr />
                <p className="addDetails">Address: Nayak Mohalla,zirniya,Khargone distric,MP | Email: amishaagrawal011@gmail.com | Contact-Number: 9617542042</p>
                <hr />
                <p className="copyright">Copyright 2021. Bookstore.com All Rights Reserved
                    <br />Privacy Policy | Terms & conditions
                </p>
            </div>
        </div>
    )
}
export default footer;