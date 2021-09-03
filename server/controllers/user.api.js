const jwt = require(`jsonwebtoken`);
const bcrypt = require("bcryptjs");
const { SendingMail } = require("../shared/nodeMailer")
const User = require("../models/user.schema");
const { request, response } = require('express');

//signup
const signUp = async (request, response) => {
    const { name, email, phoneNumber, password } = request.body;
    console.log("body : ", request.body);
    try {
        const isExist = await User.findOne({ email });
       console.log("isExist",isExist)
        if (isExist) {
            return response.status(400).json("User ,already exist");
        }
        const user = new User(request.body);
        console.log("User : ", user)
        const hashedPassword = await bcrypt.hash(user.password, 11);
        console.log("hashed pass", hashedPassword);
        user.password = hashedPassword;
        await user.save();

        const token = await generateToken(user);
        console.log("token", token)
        user.password = undefined;
        response.status(201).json({ user, token });
        SendingMail("Welcome to Amisha's Book Store !! We're glad you're a part of our company .. Have a nice day..","Amisha's Book store", user.email);

    }
    catch (error) {
        console.log(error);
        return response.status(500).json("something went wrong...!!")
    }

}
//update a user
const updateUser = async (request, response, next) => {
    const _id = request.user._id;
    console.log('request.body : ', request.body);
    const userDetails = request.body
    console.log("userDetails : ", userDetails);
    console.log('user_id : ', _id);

    try {
        const user = await User.findByIdAndUpdate(
            { _id },
            { $set: userDetails },
            { new: true }
        )
        if (!user) {
            return response.status(404).json("User does not found");
        }
        return response.status(201).json(user)
    } catch (error) {
        console.log(error);
    }
}

//get a particular user

const getAUser = async (request, response, next) => {
    const token = request.params.token
    const decoded = jwt.verify(token, "newuser");
    console.log('decode : ', decoded);

    const user = await User.findOne({ _id: decoded._id });
    console.log("user", user);
    if (!user) {
        response.status(401).json(
            {
                error: "please authenticate !!",
            }
        )
    }
    response.json({ data: user }).status(200);
}

//get all users 

const getAllUsers = async (request, response) => {
    try {
        const users = await User.find()
        response.status(201).json(users);
    }
    catch (error) {
        console.log("error in getting products", error)
    }
}

//login api

const login = async (request, response) => {
    const { email, password } = request.body;
    console.log("body", request.body);
    try {
        console.log("hello")
        const user = await findByCredentials(email, password, response);
        console.log("user", user);
        const token = await generateToken(user);
        user.password = undefined;
        response.status(200).json({ user, token });
    } catch (error) {
        console.log("error", error);
        return response.status(422).json("something went wrong");
    }
}

//generate token
const generateToken = async (user) => {
    const token = await jwt.sign({ _id: user._id.toString() }, "newuser");
    return token;
}
//hash password
const hashPassword = async (user) => {

    const hashedPassword = await bcrypt.hash(user.password, 8);

    return hashPassword;

};
//finding user
const findByCredentials = async (email, password, response) => {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
        return response.status(404).json({ error: "invalid user" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return response.status(404).json({ error: "invaid user !!" })
    }
    return user;
};


exports.signUp = signUp;
exports.login = login;
exports.getAllUsers = getAllUsers;
exports.getAUser = getAUser;
exports.updateUser = updateUser;
