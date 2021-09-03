const User = require("../models/user.schema");
const jwt = require("jsonwebtoken");
const { request, response } = require("express");

//authentication for protected routes
const auth = async (request, response, next) => {
    //middleware function
    try {
        const token = request.header("Authorization").replace("Bearer ", "");
        console.log(token);
        const decoded = jwt.verify(token, "newuser");
      
        const user = await User.findOne({_id: decoded._id});
        console.log("user",user);
        if (!user) {
            response.status(401).json(
                {
                    error: "please authenticate !!",
                }
            )
        }
        request.token = token;
        request.user = user;
        next();
    } catch (error) {
        console.log("error: == ", error)
        response.status(500).json({ error: "something auth went wrong in authorization"})
    }
};

module.exports=auth;