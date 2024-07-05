import React, { useState } from "react";
import axios from "axios";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import RedirectToLogin from "../../components/RedirectToLogin";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  backgroundColor: "black",
};

const inputStyle = {
  margin: "10px 0",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};
const appStyle = {
  textAlign: "center",
  padding: "20px",
};

function ReviewForm() {
  const user = useSelector((state) => state?.user?.user);

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(SummaryApi.postReviews.url, {
      name,
      rating,
      comment,
    });
    toast.success("Review added successfully");
    setName("");
    setRating("");
    setComment("");
  };

  return (
    <>
      {user?._id ? (
        <>
          <div
            style={appStyle}
            className="flex flex-col justify-center items-center"
          >
            <h1 className="uppercase bg-red-700 text-white w-[266px] h-8 text-center mb-2 p-1 rounded font-medium">
              Reviews
            </h1>
          </div>
          <form style={formStyle} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              required
            />
            <input
              type="number"
              placeholder="Rating (1-5)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              style={inputStyle}
              min="1"
              max="5"
              required
            />
            <textarea
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={inputStyle}
              required
            />
            <button
              type="submit"
              className="w-fit mx-auto block py-1 px-3 rounded bg-red-600 text-white hover:bg-red-700"
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
}

export default ReviewForm;
