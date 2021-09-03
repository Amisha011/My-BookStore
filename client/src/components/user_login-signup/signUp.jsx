import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import axios from "axios";
import "../loader/loader.css"
import "../user_login-signup/login.css";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const SignUp = () => {
    //stting the state of user details
    let history = useHistory();
    const [loader, setLoader] = useState(false)
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: "",
        }
    )
    //the details will change whenever user will start typing 
    const changeFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }
    //calling the signup api and saving the data to db
    const addUser = async () => {
        setLoader(true);
        try {
            console.log("formdata", formData)
            const response = await axios.post("http://localhost:8001/api/user/signUp", formData);
            const user = response.data.user;
            console.log('login response : ', response);
            localStorage.setItem('user', JSON.stringify(user));
            const userType = response.data.user.userType;


            localStorage.setItem("token", response.data.token)
            localStorage.setItem("isLoggedIn", 'true');
            localStorage.setItem("userType", response.data.user.userType);
            if (userType === "user") {
                toast.success("Successfully signed up");
                history.push("/");
            }
            else {
                toast.error("error in signing up")
            }
            setLoader(false)
            //toast.success("Successfully signed up");
        } catch (error) {
            setLoader(false)
            console.log("error", error)
            toast.error("error in signing up")
        }
    }
    return (
        <div className="signUp">
            <div className="card">
                <div className="signupHeader">
                    <Link className="login" to="/Login">Login</Link>
                    <Link className="register" to="/Register">Register</Link>
                </div>
                <div className="inputs">
                    <input
                        type="text"
                        name="name"
                        value={formData.value}
                        onChange={changeFormData}
                        placeholder="Username">
                    </input>
                    <input
                        type="email"
                        name="email"
                        onChange={changeFormData}
                        value={formData.email}
                        placeholder="email">
                    </input>
                    <input
                        type="password"
                        name="password"
                        onChange={changeFormData}
                        value={formData.password}
                        placeholder="Password"></input>
                    <div>
                        <button onClick={addUser}>Register</button>
                        {loader ? (
                            <div className="loaderHead">
                                <div className="loader"></div>
                            </div>
                        ) : null
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default SignUp;