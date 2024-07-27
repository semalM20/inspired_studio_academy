import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectToLogin = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div
      className="flex justify-center items-center bg-slate-900"
      style={{ height: "100vh" }}
    >
      <div
        className="flex justify-center flex-col items-center w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 border border-red-600 bg-black p-4"
      >
        <h1 className="font-semibold text-white text-center mb-4">
          Please Login first to proceed ahead
        </h1>
        <button
          onClick={handleClick}
          className="px-4 py-2 rounded-full text-white bg-red-600 hover:bg-red-700"
        >
          Click here to Login
        </button>
      </div>
    </div>
  );
};

export default RedirectToLogin;
