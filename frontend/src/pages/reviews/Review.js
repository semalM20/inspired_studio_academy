import React from "react";
import ReviewList from "./ReviewList";

const appStyle = {
  textAlign: "center",
  padding: "20px",
};

function Review() {
  return (
    <div style={appStyle} className="flex flex-col justify-center items-center">
      <ReviewList />
    </div>
  );
}

export default Review;
