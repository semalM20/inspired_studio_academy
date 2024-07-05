import React, { useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const AddSlots = () => {
  const [date, setDate] = useState("");
  const [availableSlots, setAvailableSlots] = useState(4);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(SummaryApi.addBeginnerCourseSlots.url, {
        method: SummaryApi.addBeginnerCourseSlots.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, availableSlots }),
      });

      const dataApi = await response.json();

      // console.log("response", dataApi);
      toast.success("Slot added successfully!");
      setDate("");
      setAvailableSlots(4);
    } catch (error) {
      toast.error(
        "Failed to add slot. Slot for this date might already exist."
      );
      console.error("Error adding slot", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-80">
      <div className="flex flex-col justify-between items-center h-20 mb-5">
        <p className="text-2xl font-medium">Add New Slot</p>
      </div>
      <form
        className="flex flex-col justify-center items-center w-1/2"
        onSubmit={handleSubmit}
      >
        <label className="mb-2">
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="ml-2 px-2 py-1 border rounded"
            required
          />
        </label>
        <label className="mb-2">
          Available Slots:
          <input
            type="number"
            value={availableSlots}
            onChange={(e) => setAvailableSlots(Number(e.target.value))}
            className="ml-2 px-2 py-1 border rounded"
            min="1"
            max="4"
            required
          />
        </label>
        <button
          type="submit"
          className="px-3 py-1 m-2 rounded text-white bg-red-600 hover:bg-red-700"
        >
          Add Slot
        </button>
      </form>
    </div>
  );
};

export default AddSlots;
