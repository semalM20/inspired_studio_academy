import React from "react";
import { useSelector } from "react-redux";
import RedirectToLogin from "../../components/RedirectToLogin";
import axios from "axios";
import SummaryApi from "../../common";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutOffB = ({ paymentType, amount }) => {
  const user = useSelector((state) => state?.user?.user);

  const userDetails = JSON.parse(localStorage.getItem("session"));

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // console.log("queryParams", queryParams.get("slotId"));

  const HandleSubmit = async (e) => {
    e.preventDefault();

    let res = await axios.post(SummaryApi.payment.url, {
      paymentType,
      amount,
      userId: userDetails._id,
      slotId: queryParams.get("slotId"),
    });

    if (res && res.data) {
      let link = res.data.data.links[1].href;
      window.location.href = link;
    }
  };

  const navigate = useNavigate();

  // const handleOnlineClick = () => {
  //   navigate("/offlineBPayItMonthly");
  // };

  return (
    <>
      {user?._id ? (
        <div className="flex justify-center flex-col items-center h-96">
          <div style={{ display: "ruby" }}>
            <p className="text-red-600">Course Fee: 1999 GBP</p>
            <p className="text-slate-500 line-through px-2 font-semibold">
              2499 GBP
            </p>
            <p className="text-red-600">(20% VAT will be applied)</p>
          </div>
          <p className="text-red-600 font-bold">Total Fees = {amount} GBP</p>
          <p>You have not purchased the course yet!</p>
          <p>Click below to buy it</p>
          <button
            onClick={HandleSubmit}
            className="bg-red-600 hover:bg-red-700 text-white w-full px-3 py-1 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-2"
          >
            Buy Now !
          </button>
          {/* <p>OR</p>
          <button
            className="bg-red-600 hover:bg-red-700 text-white w-full px-3 py-1 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-2"
            onClick={handleOnlineClick}
          >
            Pay It Monthly
          </button> */}
        </div>
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default CheckoutOffB;
