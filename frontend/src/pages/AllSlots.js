import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";

const AllSlots = () => {
  const [allSlots, setAllSlots] = useState([]);

  const fetchAllSlots = async () => {
    const fetchData = await fetch(SummaryApi.allSlot.url, {
      method: SummaryApi.allSlot.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllSlots(dataResponse.data);
    }
    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllSlots();
  }, []);

  return (
    <div className="pb-4 bg-white">
      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th>Sr.</th>
            <th>Name</th>
            <th>Booking Date</th>
            <th>Time</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {allSlots.map((el, index) => {
            return (
              <tr key={index + 1}>
                <td key={index + 2}>{index + 1}</td>
                <td key={index + 3}>{el?.name}</td>
                <td key={index + 4}>{moment(el?.date).format("LL")}</td>
                <td key={index + 5}>{el?.time}</td>
                <td key={index + 5}>{el?.email}</td>
                <td key={index + 5}>{el?.number}</td>
                <td key={index + 6}>{moment(el?.createdAt).format("LL")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllSlots;
