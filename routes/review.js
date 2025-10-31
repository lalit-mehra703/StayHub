const express = require('express');
const router = express.Router({mergeParams:true});
const wrapAsyn = require('../utils/wrapAsyn');
const ExpressError = require('../utils/ExpressError');
// const {reviewSchema} = require('../schema.js');
const Review = require('../models/review.js');
const Listing = require('../models/listing.js');
const{validateReview, isLogedIn, isReviewAuthor} = require('../middleware.js');
const reviewController = require('../controllers/reviews.js')



//Reviews post route
router.post('/',isLogedIn,validateReview,reviewController.createReview);

//Delete review route

router.delete('/:reviewId',isLogedIn,isReviewAuthor,reviewController.destroyReview);

module.exports = router;