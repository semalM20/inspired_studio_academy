import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { useSelector } from "react-redux";
import moment from "moment";
import RedirectToLogin from "../components/RedirectToLogin";

const SlotsForBegCourse = () => {
  const user = useSelector((state) => state?.user?.user);

  const [slots, setSlots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await axios.get(SummaryApi.BeginnerCourseSlots.url);
        setSlots(response.data.data);
        // console.log("slotssssss", response.data);
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
    };

    fetchSlots();
  }, []);

  const handleBookSlot = (slotId) => {
    navigate(`/offlineBCoursePayment?slotId=${slotId}`);
  };

  return (
    <>
      {user?._id ? (
        <div className="flex flex-col justify-center items-center w-full p-4">
          <div className="flex flex-col justify-between items-center h-20 mb-5 text-center">
            <p className="text-2xl font-medium">Available Slots</p>
            <p className="capitalize text-lg">
              Choose from the below slots for beginner's course
            </p>
            <p className="capitalize text-sm text-red-600 mb-10">
              ** only 4 students are allowed in each batch
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-10">
            {slots.length > 0 ? (
              slots.map((slot) => (
                <div
                  key={slot._id}
                  className="flex flex-col justify-center items-center bg-white shadow-md p-4 rounded-lg"
                >
                  <p className="text-lg font-semibold mb-2">
                    Slot Date: {moment(slot.date).format("LL")}
                  </p>
                  {slot.users.includes(user._id) ? (
                    <h1 className="text-green-600 font-semibold">Slot is already confirmed</h1>
                  ) : slot.availableSlots > slot.users.length ? (
                    <button
                      className="px-4 py-2 mt-2 rounded text-white bg-red-600 hover:bg-red-700"
                      onClick={() => handleBookSlot(slot._id)}
                    >
                      Book Slot
                    </button>
                  ) : (
                    <h1 className="text-red-600 font-semibold">All Slots are booked</h1>
                  )}
                  <p className="mt-2 text-gray-600">
                    Number of slots left: {slot.availableSlots - slot.users.length}
                  </p>
                </div>
              ))
            ) : (
              <p>No Slots Available</p>
            )}
          </div>
        </div>
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default SlotsForBegCourse;
