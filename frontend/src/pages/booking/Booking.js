import React, { useEffect, useState } from "react";
import "../style.css";
import "../mediaqueries.css";
import "./Booking.css";
import { Link, useNavigate } from "react-router-dom";
import courseBoxImage1 from "../../assets/IMG-20240214-WA0009.jpg";
import courseBoxImage2 from "../../assets/121pay.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import SummaryApi from "../../common";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../store/userSlice";

const Booking = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSlot = { name, date, time };
    try {
      const res = await axios.post(SummaryApi.bookSlot.url, newSlot);
      if (res.data.status) toast.success(res.data.message);
      setName("");
      setDate("");
      setTime("");
    } catch (error) {
      toast.error("slot is already booked");
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    if (!isMondayOrWednesday(e.target.value)) {
      e.target.setCustomValidity("Please select a Monday or Wednesday");
    } else {
      e.target.setCustomValidity("");
    }
  };

  const isMondayOrWednesday = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();
    return day === 1 || day === 3;
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };

  const navigate = useNavigate();

  const userDetails = JSON.parse(localStorage.getItem("session"));

  let offlineBCourse, offlineMCourse, onlineCourse;

  if (userDetails) {
    offlineBCourse = userDetails.offlineBCoursePayment;
    offlineMCourse = userDetails.offlineMCoursePayment;
    onlineCourse = userDetails.onlineCoursePayment;
  }

  const dispatch = useDispatch();

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
    if (userDetails) fetchUserDetails();
  }, [userDetails]);

  const handleOnlineCoursePayment = () => {
    if (onlineCourse === 0) {
      navigate("/onlineCoursePayment");
    } else {
      navigate("/bookingConfirmedOnline");
    }
  };
  const handleOfflineBCoursePayment = () => {
    // if (offlineBCourse === 0) {
    //   // navigate("/offlineBCoursePayment");
    //   navigate("/slotsForBegCourse");
    // } else {
    //   navigate("/bookingConfirmedOfflineB");
    // }
    navigate("/slotsForBegCourse");
  };
  const handleOfflineMCoursePayment = () => {
    if (offlineMCourse === 0) {
      navigate("/offlineMCoursePayment");
    } else {
      navigate("/bookingConfirmedOfflineM");
    }
  };

  return (
    <>
      <div className="book-slot-section">
        <h2>Book a Free Haircut Slot</h2>
        <h3 style={{ color: "white", paddingBottom: "20px" }}>
          {" "}
          *ONLY AVAILABLE ON MONDAY AND WEDNESDAY BETWEEN 10:00 - 16:00{" "}
        </h3>
        <form id="book-slot-form" onSubmit={handleSubmit}>
          <div className="form-group-inline">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Date"
                value={date}
                onChange={handleDateChange}
                min={getTodayDate()}
                required
                onInvalid={(e) => {
                  e.target.setCustomValidity(
                    "Please select a Monday or Wednesday"
                  );
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="time"
                id="time"
                name="time"
                placeholder="Time"
                required
                min="10:00"
                max="16:00"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="book-slot-btn"
            style={{ marginTop: "10px" }}
          >
            Book Slot
          </button>
        </form>
      </div>

      <div className="offline-course-section">
        <div className="course-boxes">
          <div className="course-box">
            <img
              src={courseBoxImage1}
              alt="Offline Course 1"
              className="course-img ml-[55px]"
            />

            <button
              className="course-btn"
              onClick={handleOfflineBCoursePayment}
            >
              GET COURSE
            </button>
            <p
              className="mt-2 p-2 text-xl font-semibold"
              // style={{ color: "#977656" }}
              style={{ color: "white" }}
            >
              BEGINNER'S COURSE
            </p>
          </div>
          <div className="course-box" style={{ paddingTop: "30px" }}>
            <h2 className="mb-14">GET ENROLLED IN OFFLINE COURSE</h2>
            <h4>BOOK YOUR SLOTS ACCORDINGLY </h4>
            <p>*There are limites seats in each slot </p>
          </div>
          <div className="course-box">
            <img
              src={courseBoxImage2}
              alt="Offline Course 2"
              className="course-img ml-[55px]"
            />

            <button
              className="course-btn"
              onClick={handleOfflineMCoursePayment}
            >
              GET COURSE
            </button>
            <p
              className="mt-2 p-2 text-xl font-semibold"
              // style={{ color: "#977656" }}
              style={{ color: "white" }}
            >
              MASTER'S COURSE
            </p>
          </div>
        </div>
      </div>

      <div className="offline-info" id="offline-info">
        <h2 className="offline-info-heading">GET ENROLLED IN ONLINE COURSE</h2>

        <div className="info-grid h-[420px] flex flex-col justify-around items-center">
          <div className="info-item flex flex-col justify-around w-1/2 h-72">
            {/* <p style={{ color: "#977656", fontSize: "24px" }}> */}
            <p style={{ color: "white", fontSize: "24px" }}>
              <strong> Sign up now for our Barber Courses. </strong>
            </p>

            <p>
              In these videos, you'll find detailed step-by-step instructions,
              high-quality demonstrations, and insider tips that Adrian has
              gathered from his extensive experience in the industry. The course
              is designed to be flexible, allowing you to learn at your own pace
              and revisit the content as often as needed.
            </p>
            <p>
              The online course features over 50 videos and includes a special
              book authored by Adrian himself, valued at £100. However, you'll
              receive the book complimentary with your course purchase.{" "}
            </p>
          </div>
          <Link>
            <button
              className="course-btn-online"
              onClick={handleOnlineCoursePayment}
            >
              GET COURSE
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Booking;
