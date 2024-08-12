const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: String,
    rating: Number,
    comment: String,
    email: String,
    number: Number
  },
  {
    timestamps: true,
  }
);

const reviewModel = mongoose.model("reviews", reviewSchema);

module.exports = reviewModel;
