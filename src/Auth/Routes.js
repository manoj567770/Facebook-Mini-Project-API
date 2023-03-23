const { Router } = require("express");
const { signUp, signIn } = require("./controller/AuthControler");
const express = require("express");
const router = express.Router();

//parse request body and get data
//try to get if the user is already there or not
//encrypt the password
//create user in our database
//create a JWT token
//send the token to user

//SignIn

router.post("/signin", signIn);

//Signup

router.post("/signup", signUp);

module.exports = router;
