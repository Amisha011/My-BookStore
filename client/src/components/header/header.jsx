import React, { useEffect, useState } from "react"
import "../header/header.css"
//import { useHistory } from "react-router-dom"
import logoImg from "../../images/logo1 .jpg"
import { Link, NavLink, useHistory } from "react-router-dom"

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const history = useHistory()
    const routeHomePage = () => {
        history.push("/")
    }
    const userType = localStorage.getItem("userType")
    const loggedIn = localStorage.getItem('isLoggedIn') ;

    console.log('Here is the is logged in : ' ,loggedIn) ;
    
    const clearLocalStorage = () => {
        localStorage.clear();
        if (userType === "user") {
            history.push("/")
        }
    }

    useEffect(() => {
        console.log("state changed") ;
        setIsLoggedIn(loggedIn) ;
    }, [localStorage.getItem('isLoggedIn')]) ;
    
    return (
        <div>
            <header className="headerOfBook">
                <div className="logoImage">
                    <img src={logoImg} onClick={() => { routeHomePage() }} alt="headerLogo" /><Link to="/"></Link>
                </div>
                <nav className="nav-barOf-Header">
                    <NavLink to="/NewArrival">New Arrival</NavLink>
                    <NavLink to="/bestsellers">Bestsellers</NavLink>
                    <NavLink to="/TextBooks">Text book</NavLink>
                    <NavLink to="/Featured Authors">Featured Authors</NavLink>

                </nav>
                <div className="search-bar-header">
                    <i class="fas fa-search" ></i> <input type="search" placeholder="Search" />
                </div>
                <div className="header-actions">
                    {
                        (isLoggedIn && userType != 'admin') && <div className="actions" >
                        <i class="far fa-user"></i>
                        <NavLink to="/profile">Profile</NavLink>
                    </div>
                    }
                    {
                        (isLoggedIn && userType != 'admin') && <div className="actions" >
                        <i class="far fa-heart"></i>
                        <NavLink to="/myWishlist">Wishlist</NavLink>
                    </div>
                    }
                    {console.log('consoling isLoggedInt : ', isLoggedIn)}
                    {isLoggedIn == 'true' ? (<div className="actions" >
                        <i class="fas fa-sign-in-alt"></i>
                        <NavLink to="/Login" onClick={() => { clearLocalStorage(); setIsLoggedIn(prevValue => !prevValue) }}>LogOut</NavLink>
                    </div>) : <div className="actions" >
                        <i class="fas fa-sign-in-alt"></i>
                        <NavLink to="/Login">LogIn</NavLink>
                    </div>

                    }
                </div>
            </header>
        </div>
    )
}
export default Header