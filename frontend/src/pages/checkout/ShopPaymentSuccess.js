import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RedirectToLogin from "../../components/RedirectToLogin";
import { useSelector } from "react-redux";
import SummaryApi from "../../common";
import { toast } from "react-toastify";

const ShopPaymentSuccess = () => {
  const user = useSelector((state) => state?.user?.user);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  const [allBuyers, setAllBuyers] = useState([]);

  const fetchAllProductsBuyers = async () => {
    const fetchData = await fetch(SummaryApi.shopBuyers.url, {
      method: SummaryApi.shopBuyers.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();
    // console.log("dataResponse", dataResponse);

    if (dataResponse.success) {
      setAllBuyers(dataResponse.data);
    } else if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllProductsBuyers();
  }, []);

  return (
    <>
      {user?._id ? (
        <div className="h-96 flex justify-center items-center">
          <p className="text-2xl text-red-600 text-center">
            You have successfully purchased the products
            <br />
            You can continue to the website...
          </p>
        </div>
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default ShopPaymentSuccess;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import RedirectToLogin from "../../components/RedirectToLogin";
// import { useSelector } from "react-redux";
// import SummaryApi from "../../common";
// import { toast } from "react-toastify";

// const ShopPaymentSuccess = () => {
//   const user = useSelector((state) => state?.user?.user);
//   const navigate = useNavigate();
//   const [paymentStatus, setPaymentStatus] = useState(null);

//   const fetchPaymentStatus = async () => {
//     if (user?._id) {
//       try {
//         const response = await fetch(SummaryApi.shopBuyers.url, {
//           method: SummaryApi.shopBuyers.method,
//           credentials: "include",
//         });

//         const dataResponse = await response.json();
//         console.log("object------>", dataResponse);
//         if (dataResponse.success) {
//           const latestPurchase = dataResponse.data.find(
//             (buyer) => buyer.userId === user._id
//           );
//           setPaymentStatus(latestPurchase?.paymentStatus);
//         } else if (dataResponse.error) {
//           toast.error(dataResponse.message);
//         }
//       } catch (error) {
//         toast.error("Failed to fetch payment status");
//       }
//     }
//   };

//   useEffect(() => {
//     fetchPaymentStatus();
//   }, [user]);

//   console.log("paymentStatus", paymentStatus);

//   // useEffect(() => {
//   //   if (paymentStatus !== "paid") {
//   //     navigate("/");
//   //   }
//   // }, [paymentStatus, navigate]);

//   return (
//     <>
//       {user?._id ? (
//         paymentStatus === "paid" ? (
//           <div className="h-96 flex justify-center items-center">
//             <p className="text-2xl text-red-600 text-center">
//               You have successfully purchased the products
//               <br />
//               You can continue to the website...
//             </p>
//           </div>
//         ) : (
//           <div className="h-96 flex justify-center items-center">
//             <p className="text-2xl text-red-600 text-center">
//               Checking payment status...
//             </p>
//           </div>
//         )
//       ) : (
//         <RedirectToLogin />
//       )}
//     </>
//   );
// };

// export default ShopPaymentSuccess;
