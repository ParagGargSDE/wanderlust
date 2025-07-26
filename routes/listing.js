const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsyc.js");
// const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const ListingController = require("../controllers/listings.js");


router
    .route("/")
    .get(wrapAsync(ListingController.index))
    .post(isLoggedIn, validateListing, wrapAsync(ListingController.createlisting));
  

//Index Route
//  router.get("/", wrapAsync(ListingController.index));


// about us page
  router.get("/about", ListingController.aboutus);
  
  //New Route
  router.get("/new", isLoggedIn, ListingController.renderNewForm);

  router
    .route("/:id")
    .get(wrapAsync(ListingController.showlisting))
    .put(isLoggedIn,isOwner, validateListing, wrapAsync(ListingController.updatelisting))
    .delete( isLoggedIn, isOwner, wrapAsync(ListingController.deletelisting));
  
  //Show Route
//   router.get("/:id", wrapAsync(ListingController.showlisting));
  
  //Create Route
//   router.post("/", isLoggedIn, validateListing, wrapAsync(ListingController.createlisting));
  
  //Edit Route
  router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(ListingController.editlisting));
  
  //Update Route
//   router.put("/:id", isLoggedIn,isOwner,
//   validateListing, wrapAsync(ListingController.updatelisting));
  
  //Delete Route
//   router.delete("/:id", isLoggedIn, isOwner, wrapAsync(ListingController.deletelisting));

  module.exports = router;