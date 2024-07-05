import React from "react";
import { useSelector } from "react-redux";
import RedirectToLogin from "../components/RedirectToLogin";
import { useNavigate } from "react-router-dom";

const BookingConfirmedOfflineB = () => {
  const user = useSelector((state) => state?.user?.user);

  const userDetails = JSON.parse(localStorage.getItem("session"));

  let offlineBCourse;

  if (userDetails) {
    offlineBCourse = userDetails.offlineBCoursePayment === 1;
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/offlineBCoursePayment");
  };

  return (
    <>
      {user?._id ? (
        offlineBCourse ? (
          <div className="flex flex-col justify-center items-center h-96">
            <p>You have successfully purchased offline beginner's course</p>
            <h1>Visit the store and check your schedule</h1>
          </div>
        ) : (
          <div className="flex justify-center flex-col items-center h-96">
            <div className="flex justify-around">
              <p className="text-red-600 font-bold">
                Beginner's Course Fee: 1999 GBP{" "}
              </p>
              <p className="text-slate-500 line-through px-2 font-semibold">
                2499 GBP
              </p>
            </div>
            <p>You have not purchased the offline beginner's course</p>
            <p>click here to buy the course </p>
            <button
              onClick={handleClick}
              className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
            >
              Buy Beginner's Course
            </button>
          </div>
        )
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default BookingConfirmedOfflineB;
