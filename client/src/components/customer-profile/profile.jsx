import React, { useState, useEffect } from "react"
import axios from "axios"
import "../loader/loader.css"
import "../customer-profile/profile.css"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { useHistory,Link } from "react-router-dom";


const Profile = () => {
    const [loader, setLoader] = useState(false);
    const [loading, setLoading] = useState(false);
    // Add image logic here
    const user_string = localStorage.getItem("user");
    const user = JSON.parse(user_string);
    console.log(user) ;
    const [userData, setUserdata] = useState({
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address:user.address

    })

    const changeUserData = (e) => {
        const name = e.target.name;
        const value=e.target.value;
        setUserdata({...userData,[name]:value})
    }

    const updateUser=async()=>{
        try {
            const response=await axios.put("http://localhost:8001/api/user/updateUser",userData, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
            console.log("response of update api",response)  
           toast.success("Updated Profile")
        } catch (error) {
           console.log("error at updating user",error)
           toast.error("Error occured in updating profile !!") 
        }
    }

    console.log("user", user)
    // const [imgstate, setImagestate] = useState(user.image)
    const token = localStorage.getItem("token");

    const uploadImage = async e => {
        setLoader(true)
        const files = e.target.files;
        const data = new FormData()
        data.append('file', files[0]);
        data.append('upload_preset', 'eyowpxag')
        setLoading(true);

        const res = await fetch("https://api.cloudinary.com/v1_1/ddcy8imkx/image/upload", {
            method: 'POST',
            body: data
        })
        const file = await res.json();
        console.log("file", file);
        const user_update_response = await axios.put("http://localhost:8001/api/user/updateUser", { image: file.secure_url }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
        console.log('updated_user_json : ', user_update_response);
        localStorage.setItem('user', JSON.stringify(user_update_response.data));
        setLoading(false)
        setLoader(false)
        toast.success("Image uploaded successfully !!")
    }


    return (
        <div className="container">
            <div className="section1">
                <div className="top-left-profile">

                    <img src={user.image} alt="user's image "></img>

                    <div className="details-user">
                        <input
                            name="name"
                            value={userData.name}
                            placeholder="Name"
                            property="readOnly" />
                        <input
                            name="email"
                            value={userData.email}
                            placeholder="Email"
                            property="readOnly" />
                    </div>
                </div>
                <div className="list-left">
                    <button  ><Link to="/MyOrders" className="myOrder">My orders </Link><i class="fas fa-hand-point-right"></i></button>
                    <button ><Link to='/myWishlist' className="myOrder">My wishlist </Link><i class="fas fa-hand-point-right"></i></button>
                    <button style={{ borderBottom: "2px solid black" }}> Logout  <i class="fas fa-sign-in-alt"></i></button>
                </div>
            </div>
            <div className="section2">
                <div className="center-profile">
                    <img src={user.image} alt="users image"></img>
                    <input
                        type="file"
                        name="image-upload"
                        accept="image/*"
                        id="input"
                        onChange={uploadImage}
                        placeholder="Upload"
                    />
                    <div className="label">
                        <label className="image-upload" htmlFor="input">
                            Choose your Photo
					            </label>
                    </div>
                    {loader ? (
                        <div className="loaderHead1">
                            <div className="loader1"></div>
                        </div>
                    ) : null
                    }
                </div>
                <div className="detailsss">
                    <div className="detailss1">
                        <input
                        name="name" 
                        value={userData.name} 
                        placeholder="Name"
                        onChange={changeUserData}
                        />
                        <input
                        type="number"
                        name="phoneNumber"
                        placeholder="Number"
                         value={userData.phoneNumber} 
                         onChange={changeUserData}
                         />
                    </div>
                    <div className="detailss2">
                        <input 
                        type="email"
                        name="email"
                        value={userData.email}
                        placeholder="Email"
                        onChange={changeUserData} 
                        />
                        <input 
                        name="address"
                        placeholder="address"
                        value={userData.address}
                        onChange={changeUserData}
                        />
                    </div>
                </div>
                <button className="update-button" onClick={()=>{updateUser()}}>update</button>
            </div>

        </div>
    )


}
export default Profile;