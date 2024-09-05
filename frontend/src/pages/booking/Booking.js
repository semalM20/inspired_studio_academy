import React, { useEffect, useState } from "react";
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
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSlot = { name, date, time, email, number };
    try {
      const res = await axios.post(SummaryApi.bookSlot.url, newSlot);
      if (res.data.status) toast.success(res.data.message);
      setName("");
      setDate("");
      setTime("");
      setEmail("");
      setNumber("");
    } catch (error) {
      toast.error("slot is already booked");
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    if (!isValidBookingDay(e.target.value)) {
      e.target.setCustomValidity("Please select a valid booking day (Monday, Wednesday, or Sunday)");
    } else {
      e.target.setCustomValidity("");
    }
  };

  const isValidBookingDay = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();
    // Monday (1), Wednesday (3), Sunday (0)
    return day === 1 || day === 3 || day === 0;
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

  const getBookingStartDate = () => "2024-08-26";
  const getBookingEndDate = () => "2024-09-25";

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
        <h2>Book £1 Haircuts&Beard</h2>
        <h3 style={{ color: "white", paddingBottom: "20px" }}>
          {" "}
          <sup>*</sup>ONLY AVAILABLE ON MONDAY, WEDNESDAY, AND SUNDAY BETWEEN 10:00 - 15:00{" "}
        </h3>
        {/* <h3 className="uppercase"><sup>*</sup>Will Be Coming Soon...</h3> */}
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
                // min={getTodayDate()}
                min={getBookingStartDate()}
                max={getBookingEndDate()}
                required
                onInvalid={(e) => {
                  e.target.setCustomValidity(
                    "Please select a valid booking day (Monday, Wednesday, or Sunday)"
                  );
                }}
              />
            </div>
            <div className="form-group">
              <select
                id="time"
                name="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="" disabled>
                  Select Time
                </option>
                <option value="10:00">10:00 AM</option>
                <option value="11:30">11:30 AM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:30">02:30 PM</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Contact Number"
                required
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
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
              className="course-img"
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
            {/* <h2 className="mb-14">GET ENROLLED IN OFFLINE COURSE</h2> */}
            <h4>BOOK YOUR SLOTS ACCORDINGLY </h4>
            <p>*There are limites seats in each slot </p>
          </div>
          <div className="course-box">
            <img
              src={courseBoxImage2}
              alt="Offline Course 2"
              className="course-img"
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
        <h2 className="booking-offline-info-heading uppercase">Register For ONLINE Education Course</h2>

        <div className="info-grid h-[420px] flex flex-col justify-around items-center">
          <div className="info-item flex flex-col justify-around w-1/2 h-72">
            {/* <p style={{ color: "#977656", fontSize: "24px" }}> */}
            {/* <p style={{ color: "white", fontSize: "24px" }}>
              <strong> Sign up now for our Barber Courses. </strong>
            </p> */}

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
