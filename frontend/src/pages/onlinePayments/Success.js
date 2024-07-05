import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RedirectToLogin from "../../components/RedirectToLogin";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../../common";
import { setUserDetails } from "../../store/userSlice";

const Success = () => {
  const user = useSelector((state) => state?.user?.user);

  const userDetails = JSON.parse(localStorage.getItem("session"));

  let offlineBCourse, offlineMCourse, onlineCourse;

  if (userDetails) {
    offlineBCourse = userDetails.offlineBCoursePayment === 1;
    offlineMCourse = userDetails.offlineMCoursePayment === 1;
    onlineCourse = userDetails.onlineCoursePayment === 1;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(
      SummaryApi.current_user.url + "?userId=" + userDetails._id,
      {
        method: SummaryApi.current_user.method,
        credentials: "include",
      }
    );

    const dataApi = await dataResponse.json();
    if (dataApi.success && dataApi.data) {
      localStorage.setItem("session", JSON.stringify(dataApi.data));
      dispatch(setUserDetails(dataApi.data));
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (userDetails) {
      fetchUserDetails();
    }
  }, [userDetails]);

  const handleClick = async () => {
    navigate("/videoCourse");
  };

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <>
      {user?._id ? (
        onlineCourse && offlineBCourse && offlineMCourse ? (
          <div className="flex justify-center flex-col items-center h-96">
            <p>You have purchased all the courses successfully!!!</p>
            <p>
              If you want to proceed to the video course.
              <br /> Click on the button below!
            </p>
            <button
              onClick={handleClick}
              className="bg-red-600 hover:bg-red-700 text-white w-full px-3 py-1 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-2"
            >
              Video Course
            </button>
          </div>
        ) : offlineBCourse && offlineMCourse ? (
          <div className="flex justify-center flex-col items-center h-96">
            <p>
              You have purchased the offline beginner's as well as the offline
              master's course successfully!!!
            </p>
          </div>
        ) : offlineBCourse && onlineCourse ? (
          <div className="flex justify-center flex-col items-center h-96">
            <p>
              You have purchased the offline beginner's course and online video
              course successfully!!!
            </p>
            <p>
              If you want to proceed to the video course.
              <br /> Click on the button below!
            </p>
            <button
              onClick={handleClick}
              className="bg-red-600 hover:bg-red-700 text-white w-full px-3 py-1 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-2"
            >
              Video Course
            </button>
          </div>
        ) : offlineMCourse && onlineCourse ? (
          <div className="flex justify-center flex-col items-center h-96">
            <p>
              You have purchased the offline master's course and online video
              course successfully!!!
            </p>
            <p>
              If you want to proceed to the video course. Click on the button
              below!
            </p>
            <button
              onClick={handleClick}
              className="bg-red-600 hover:bg-red-700 text-white w-full px-3 py-1 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-2"
            >
              Video Course
            </button>
          </div>
        ) : onlineCourse ? (
          <div className="flex justify-center flex-col items-center h-96">
            <h3>Payment done successfully</h3>
            <p>Proceed to video course</p>
            <button
              onClick={handleClick}
              className="bg-red-600 hover:bg-red-700 text-white w-full px-3 py-1 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-2"
            >
              Video Course
            </button>
          </div>
        ) : offlineBCourse ? (
          <div className="flex flex-col justify-center items-center h-96">
            <p>You have successfully purchased offline beginner's course</p>
            <h1>Visit the store and check your schedule</h1>
          </div>
        ) : offlineMCourse ? (
          <div className="flex flex-col justify-center items-center h-96">
            <p>You have successfully purchased offline master's course</p>
            <h1>Visit the store and check your schedule</h1>
          </div>
        ) : (
          <div className="flex justify-center flex-col items-center h-96">
            <p>You have not purchased any of the course</p>
            <p>Click here to buy the courses</p>
            <button
              onClick={handleBookingClick}
              className="bg-red-600 hover:bg-red-700 text-white w-full px-3 py-1 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-2"
            >
              Buy Courses
            </button>
          </div>
        )
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default Success;
