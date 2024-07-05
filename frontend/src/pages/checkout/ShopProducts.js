// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import moment from "moment";
// import SummaryApi from "../../common";
// // import { MdModeEdit } from "react-icons/md";
// // import ChangeUserRole from "../components/ChangeUserRole";

// const ShopProducts = () => {
//   const [allBuyers, setAllBuyers] = useState([]);

//   //   const [openUpdateRole, setOpenUpdateRole] = useState(false);

//   //   const [updateUserDetails, setUpdateUserDetails] = useState({
//   //     userName: "",
//   //     userEmail: "",
//   //     userId: "",
//   //     paymentId: "",
//   //     amount: "",
//   //     paymentType: "",
//   //     expirySubDate: "",
//   //     _id: "",
//   //   });

//   const fetchAllSubscriptions = async () => {
//     const fetchData = await fetch(SummaryApi.shopBuyers.url, {
//       method: SummaryApi.shopBuyers.method,
//       credentials: "include",
//     });

//     const dataResponse = await fetchData.json();
//     console.log("dataResponse", dataResponse);

//     if (dataResponse.success) {
//       setAllBuyers(dataResponse.data);
//     }
//     if (dataResponse.error) {
//       toast.error(dataResponse.message);
//     }
//   };

//   useEffect(() => {
//     fetchAllSubscriptions();
//   }, []);

//   return (
//     <div className="pb-4 bg-white">
//       <table className="w-full userTable">
//         <thead>
//           <tr className="bg-black text-white">
//             <th>Sr.</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>PhoneNymber</th>
//             <th>City</th>
//             <th>Postal Code</th>
//             <th>Address</th>
//             <th>Products</th>
//             <th>UserId</th>
//             <th>PaymentId</th>
//             <th>Amount</th>
//             <th>Payment Status</th>
//             <th>Created Date</th>
//             {/* <th>Action</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {allBuyers.map((el, index) => {
//             if (el?.paymentType === "onlineCoursePayment") {
//               return (
//                 <tr key={index + 11}>
//                   <td key={index + 1}>{index + 1}</td>
//                   <td key={index + 9}>{el?.userName}</td>
//                   <td key={index + 2}>{el?.userEmail}</td>
//                   <td key={index + 3}>{el?.userId}</td>
//                   <td key={index + 4}>{el?.paymentId}</td>
//                   <td key={index + 5}>{el?.amount}</td>
//                   {/* <td key={index + 6}>{el?.paymentType}</td> */}
//                   <td key={index + 7}>{moment(el?.createdAt).format("LL")}</td>
//                   <td key={index + 8}>
//                     {moment(el?.expirySubDate).format("LL")}
//                   </td>
//                   {/* <td key={index + 9}>
//                   <button
//                     className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
//                     onClick={() => {
//                       setUpdateUserDetails(el);
//                       setOpenUpdateRole(true);
//                     }}
//                   >
//                     <MdModeEdit />
//                   </button>
//                 </td> */}
//                 </tr>
//               );
//             }
//           })}
//         </tbody>
//       </table>

//       {/* {openUpdateRole && (
//         <ChangeUserRole
//           onClose={() => {
//             setOpenUpdateRole(false);
//           }}
//           name={updateUserDetails.name}
//           email={updateUserDetails.email}
//           role={updateUserDetails.role}
//           userId={updateUserDetails._id}
//           onlineCoursePayment={updateUserDetails.onlineCoursePayment}
//           offlineBCoursePayment={updateUserDetails.offlineBCoursePayment}
//           offlineMCoursePayment={updateUserDetails.offlineMCoursePayment}
//           callFunc={fetchAllSubscriptions}
//         />
//       )} */}
//     </div>
//   );
// };

// export default ShopProducts;

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import SummaryApi from "../../common";

const ShopProducts = () => {
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
    <div className="pb-4 bg-white">
      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>City</th>
            <th>Postal Code</th>
            <th>Address</th>
            <th>Products</th>
            <th>UserId</th>
            <th>Payment Status</th>
            <th>Amount</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {allBuyers.map((buyer, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{buyer.name}</td>
              <td>{buyer.email}</td>
              <td>{buyer.phoneNumber}</td>
              <td>{buyer.city}</td>
              <td>{buyer.postalCode}</td>
              <td>{buyer.address}</td>
              <td>
                {buyer.products.map((product, productIndex) => (
                  <div key={productIndex}>
                    {product.productName} (x{product.quantity})
                  </div>
                ))}
              </td>
              <td>{buyer.userId}</td>
              <td>{buyer.paymentStatus}</td>
              <td>{buyer.amount}</td>
              <td>{moment(buyer.createdAt).format("LL")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShopProducts;
