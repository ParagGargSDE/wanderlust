const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsyc.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isOwner, isreviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/review.js");

//Reviews  // POST route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));
  
  // delete review route
router.delete("/:reviewId", isLoggedIn, isreviewAuthor, wrapAsync(reviewController.deletereview));

  module.exports = router;