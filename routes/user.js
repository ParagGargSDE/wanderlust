const express = require("express");
const router = express.Router();
// const User =  require("../models/user.js");
const wrapAsyc = require("../utils/wrapAsyc");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const usercontroller = require("../controllers/user.js");


router
    .route("/signup")
    .get(usercontroller.rendersignup)
    .post(wrapAsyc(usercontroller.signup));

router
    .route("/login")
    .get(usercontroller.renderlogin)
    .post(saveRedirectUrl, passport.authenticate("local",{failureRedirect: '/login', failureFlash: true}), usercontroller.login);


// router.get("/signup",usercontroller.rendersignup);

// signup router

// router.post("/signup",wrapAsyc(usercontroller.signup));

// login

// router.get("/login",usercontroller.renderlogin);

// router.post("/login",saveRedirectUrl, passport.authenticate("local",{failureRedirect: '/login', failureFlash: true}), usercontroller.login);

// logout

router.get("/logout", usercontroller.logout);

router.get("/booking", usercontroller.booking);

module.exports = router;

