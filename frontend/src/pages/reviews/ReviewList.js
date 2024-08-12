import React, { useState, useEffect } from "react";
import axios from "axios";
import SummaryApi from "../../common";
import { useNavigate } from "react-router-dom";

const listStyle = {
  maxWidth: "600px",
  margin: "20px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  backgroundColor: "black",
  color: "white",
  fontSize: "20px",
};

const reviewStyle = {
  borderBottom: "1px solid #ccc",
  paddingBottom: "10px",
  marginBottom: "10px",
};

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      const response = await axios.get(SummaryApi.getReviews.url);
      setReviews(response.data.data);
    }
    fetchReviews();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addReviews");
  };

  return (
    <>
      <div className=" flex justify-center items-center">
        <p className="mt-2 bg-red-700 w-96 font-medium uppercase text-white text-center p-2">
          All Reviews
        </p>
      </div>
      <div style={listStyle}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} style={reviewStyle}>
              <h3>Name: {review.name}</h3>
              <p>Rating: {review.rating}</p>
              <p>Email: {review.email}</p>
              <p>Phone Number: {review.number}</p>
              <p>Comment: {review.comment}</p>
              <p>Created Date: {new Date(review.createdAt).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
      <button
        className="w-fit mx-auto block py-1 px-3 rounded bg-red-600 text-white hover:bg-red-700 mt-4"
        onClick={handleClick}
      >
        Add Reviews
      </button>
    </>
  );
}

export default ReviewList;
