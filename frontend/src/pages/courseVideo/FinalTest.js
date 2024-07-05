import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RedirectToLogin from "../../components/RedirectToLogin";
import CertificateGenerator from "./CertificateGenerator";

const FinalTest = () => {
  const user = useSelector((state) => state?.user?.user);

  const userDetails = JSON.parse(localStorage.getItem("session"));

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      {user?._id ? (
        <>
          <div className="w-full">
            <iframe
              title="Google Form"
              src="https://docs.google.com/forms/d/1IJnmI9Z4eu3YXF5WcL6NCsrDhrvgQ_xXue74cDBdRWc"
              width="100%"
              height="700"
            >
              Loading...
            </iframe>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1>Test Completion</h1>
            {/* Assuming test completion logic here */}
            <CertificateGenerator userName={userDetails.name} />
          </div>

          <div className="flex flex-col justify-center items-center my-5">
            <p>Go back to home page</p>
            <button
              className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
              onClick={handleClick}
            >
              Home Page
            </button>
          </div>
        </>
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default FinalTest;
