import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectToLogin = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div
      className="flex justify-center flex-col items-center bg-slate-900"
      style={{ height: "37rem" }}
    >
      <div
        className="flex justify-center flex-col items-center w-4/12 border border-red-600 bg-black "
        style={{ height: "250px" }}
      >
        <h1 className="font-semibold text-white">
          Please Login first to proceed ahead
        </h1>
        <button
          onClick={handleClick}
          className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
        >
          CLick here to Login
        </button>
      </div>
    </div>
  );
};

export default RedirectToLogin;
