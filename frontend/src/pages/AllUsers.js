import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from "../components/ChangeUserRole";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  const [openUpdateRole, setOpenUpdateRole] = useState(false);

  const [updateUserDetails, setUpdateUserDetails] = useState({
    name: "",
    email: "",
    role: "",
    onlineCoursePayment: "",
    offlineBCoursePayment: "",
    offlineMCoursePayment: "",
    _id: "",
  });

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUser.url, {
      method: SummaryApi.allUser.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllUsers(dataResponse.data);
    }
    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="pb-4 bg-white">
      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Online Course</th>
            <th>Beginner's Course</th>
            <th>Master's Course</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((el, index) => {
            return (
              <tr key={index + 11}>
                <td key={index + 1}>{index + 1}</td>
                <td key={index + 2}>{el?.name}</td>
                <td key={index + 3}>{el?.email}</td>
                <td key={index + 4}>{el?.role}</td>
                <td key={index + 5}>{el?.onlineCoursePayment}</td>
                <td key={index + 6}>{el?.offlineBCoursePayment}</td>
                <td key={index + 7}>{el?.offlineMCoursePayment}</td>
                <td key={index + 8}>{moment(el?.createdAt).format("LL")}</td>
                <td key={index + 9}>
                  <button
                    className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
                    onClick={() => {
                      setUpdateUserDetails(el);
                      setOpenUpdateRole(true);
                    }}
                  >
                    <MdModeEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {openUpdateRole && (
        <ChangeUserRole
          onClose={() => {
            setOpenUpdateRole(false);
          }}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          userId={updateUserDetails._id}
          onlineCoursePayment={updateUserDetails.onlineCoursePayment}
          offlineBCoursePayment={updateUserDetails.offlineBCoursePayment}
          offlineMCoursePayment={updateUserDetails.offlineMCoursePayment}
          callFunc={fetchAllUsers}
        />
      )}
    </div>
  );
};

export default AllUsers;
