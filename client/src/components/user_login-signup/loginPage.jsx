import axios from "axios";
import React, { useState} from "react";
import { Link,useHistory } from "react-router-dom"
import "../loader/loader.css"
import { toast } from 'react-toastify';
import "../user_login-signup/signUp.css";

const Login = () => {
    const [loader, setLoader] = useState(false);
    let history=useHistory();
    const [formdataa, setFromdata] = useState({
        email: "",
        password: "",
    });
    const changeFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFromdata({ ...formdataa, [name]: value })
    }
    const signIn = async () => {
        setLoader(true)
        try {

            //localStorage.setItem("isLoggedIn",true);
            console.log("data", formdataa);
            const response = await axios.post("http://localhost:8001/api/user/login", formdataa);
            console.log("Response", response);
            const user = response.data.user ;
            console.log('login response : ', response) ;
            localStorage.setItem('user', JSON.stringify(user)) ;
            const userType = response.data.user.userType;
            if (userType === "user") {
                localStorage.setItem("isLoggedIn", 'true');
                localStorage.setItem("token", response.data.token)
                console.log(userType)
                localStorage.setItem("userType", userType)
                toast.success("Successfully logged in !!");
                history.push("/");
               
            }else{
                toast.error("Enter valid Email and Password");
            }
            setLoader(false)
        } catch (error) {
            console.log(error, "error");
            toast.error("error occured in logging in");

            setLoader(false);
        }
    }

    return (
        <div className="loginMain" >
            <div className="card1">
                <div className="loginHeader1">
                    <Link className="loginBtn" to="/Login">Login</Link>
                    <Link className="register1" to="/Register">Register</Link>
                </div>
                <div className="inputs1">
                    <input
                        type="email"
                        name="email"
                        value={formdataa.value}
                        onChange={changeFormData}
                        placeholder="email"></input>
                    <input
                        type="password"
                        name="password"
                        value={formdataa.value}
                        onChange={changeFormData}
                        placeholder="Password"></input>
                    <div>
                        <button onClick={signIn}>Login</button>
                        {loader ? (
                            <div className="loaderHead1">
                                <div className="loader1"></div>
                            </div>
                        ) : null
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login;