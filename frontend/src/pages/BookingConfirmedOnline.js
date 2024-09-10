import React from "react";
import { useSelector } from "react-redux";
import RedirectToLogin from "../components/RedirectToLogin";
import { useNavigate } from "react-router-dom";

const BookingConfirmed = () => {
  const user = useSelector((state) => state?.user?.user);

  const userDetails = JSON.parse(localStorage.getItem("session"));

  let onlineCourse;

  if (userDetails) {
    onlineCourse = userDetails.onlineCoursePayment === 1;
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/onlineCoursePayment");
  };

  const handleVideoClick = () => {
    navigate("/videoCourse");
  };

  return (
    <>
      {user?._id ? (
        onlineCourse ? (
          <>
            <div className="flex flex-col justify-center items-center h-96">
              <p>You have successfully purchased the online course</p>
              <h1>Click here to go to the course page</h1>
              <button
                onClick={handleVideoClick}
                className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                Video Course
              </button>
            </div>
          </>
        ) : (
          <>
            <p
              className="uppercase flex justify-center items-center p-2 text-red-700 font-bold"
              style={{ fontSize: "20px" }}
            >
              <sup className="font-bold">**</sup>
              Online Video course will be available only for 3 months
            </p>
            <div className="flex justify-center flex-col items-center h-96">
              <div style={{ display: "ruby" }}>
                <p className="text-red-600">
                  Video Course Fee: 260£{" "}
                </p>
                <p className="text-slate-500 line-through px-2 font-semibold">
                  1250£
                </p>
                <p className="text-red-600">(Including TAX)</p>
                {/* <p className="text-red-600">(20% VAT will be applied)</p> */}
              </div>
              {/* <p className="text-red-600 font-bold">Total Fees = 600 GBP</p> */}
              <p>You have not purchased the video course</p>
              <p>click here to buy the course </p>
              <button
                onClick={handleClick}
                className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                Buy Video Course
              </button>
            </div>
          </>
        )
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default BookingConfirmed;
