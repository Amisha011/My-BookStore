import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"

import "../Admin login/adminlogin.css"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const AdminLogin = (props) => {
    let history = useHistory();
    const [loader1, setLoader1] = useState(false);
    const [formdata1, setFormdata1] = useState({
        email: "",
        password: "",
    });
    const changeFormData1 = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormdata1({ ...formdata1, [name]: value });
    }
     const signIn = async () => {
        setLoader1(true)
        try {
            console.log("data", formdata1);
            const response1 = await axios.post("http://localhost:8001/api/user/login", formdata1);
            console.log("response 1", response1);
            const userType = response1.data.user.userType;
            console.log(userType, "user type")
            const admin = response1.data.user

            console.log('What is the usertype : ', userType) ;
            if (userType === "admin") {
                toast.success("Successfully logged in !!!");
             history.push("/Admin/home")
                window.location.href = '/Admin/home' ;

                localStorage.setItem("isLoggedIn", true)
               localStorage.setItem("userType", userType)
                localStorage.setItem("token", response1.data.token)

            }
            else {
                toast.error("Login as a Admin")
            }
            setLoader1(false)
            toast.success("Successfully logged in");
        } catch (error) {
            setLoader1(false)
            console.log("error", error)
            toast.error("error in logging in")
        }
    }
    return (

        <div className="admin">
            <div className="adminLogin">
                <input
                    type="email"
                    name="email"
                    value={formdata1.value}
                    onChange={changeFormData1}
                    placeholder="Email"></input>
                <input
                    type="password"
                    name="password"
                    value={formdata1.value}
                    onChange={changeFormData1}
                    placeholder="Password"></input>
                <div>
                    <button onClick={signIn} >Login</button>
                    {loader1 ? (
                        <div className="loaderHead">
                            <div className="loader"></div>
                        </div>
                    ) : null
                    }
                </div>
            </div>
        </div>
    )

}

export default AdminLogin;