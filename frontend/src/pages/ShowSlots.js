import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";

const ShowSlots = () => {
  //   const userDetails = JSON.parse(localStorage.getItem("session"));
  //   const userName = userDetails.name;
  //   console.log(userName);

  const [allSlots, setAllSlots] = useState([]);

  const fetchAllSlots = async () => {
    const fetchData = await fetch(SummaryApi.BeginnerCourseSlots.url, {
      method: SummaryApi.BeginnerCourseSlots.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();
    // console.log(dataResponse);

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
            {/* <th>Name</th> */}
            <th>User Id</th>
            <th>Booking Date</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {allSlots.map((slot, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {/* <td>{slot.userName}</td> */}
              <td>
                {slot.users && slot.users.length > 0 ? (
                  <ul>
                    {slot.users.map((user, userIndex) => (
                      <li key={userIndex}>{user}</li>
                    ))}
                  </ul>
                ) : (
                  "No users"
                )}
              </td>
              <td>{moment(slot.date).format("LL")}</td>
              <td>{moment(slot.createdAt).format("LL")}</td>
            </tr>
          ))}
          {/* {allSlots.map((slot, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{moment(slot.date).format("LL")}</td>
              <td>
                {slot.users && slot.users.length > 0 ? (
                  <ul>
                    {slot.users.map((user, userIndex) => (
                      <li key={userIndex}>
                        {user.name} (ID: {user._id})
                      </li>
                    ))}
                  </ul>
                ) : (
                  "No users"
                )}
              </td>
              <td>{moment(slot.createdAt).format("LL")}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default ShowSlots;
