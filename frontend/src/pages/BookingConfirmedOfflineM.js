import React from "react";
import { useSelector } from "react-redux";
import RedirectToLogin from "../components/RedirectToLogin";
import { useNavigate } from "react-router-dom";

const BookingConfirmedOfflineM = () => {
  const user = useSelector((state) => state?.user?.user);

  const userDetails = JSON.parse(localStorage.getItem("session"));

  let offlineMCourse;

  if (userDetails) {
    offlineMCourse = userDetails.offlineMCoursePayment === 1;
  }

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/offlineMCoursePayment");
  };

  return (
    <>
      {user?._id ? (
        offlineMCourse ? (
          <div className="flex flex-col justify-center items-center h-96">
            <p>You have successfully purchased the offline master's course </p>
            <p className="text-red-600 capitalize my-2">
              <sup>**</sup> call the Academy for the slots available{" "}
            </p>
            {/* <h1>Visit the store and check your schedule</h1> */}
          </div>
        ) : (
          <div className="flex justify-center flex-col items-center h-96">
            <p className="text-red-600 font-bold">
              Master's Course Fee: 360£{" "}
            </p>
            <p className="text-red-600 capitalize my-2">
              <sup>**</sup> call the Academy for the slots available{" "}
            </p>
            <p>You have not purchased the master's course</p>
            <p>click here to buy the course </p>
            <button
              onClick={handleClick}
              className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
            >
              Buy Master's Course
            </button>
          </div>
        )
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default BookingConfirmedOfflineM;
