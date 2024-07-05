import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RedirectToLogin from "../../components/RedirectToLogin";

const ShopPaymentFailed = () => {
  const user = useSelector((state) => state?.user?.user);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shopCheckout");
  };

  return (
    <>
      {user?._id ? (
        <div className="flex justify-center flex-col items-center h-96">
          <h3>Payment Failed</h3>
          <button
            onClick={handleClick}
            className="bg-red-600 hover:bg-red-700 text-white w-full px-3 py-1 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-2"
          >
            Try again
          </button>
        </div>
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default ShopPaymentFailed;
