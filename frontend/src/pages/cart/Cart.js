// import React, { useEffect, useState } from "react";
// import { MdDelete } from "react-icons/md";
// import SummaryApi from "../../common";
// import { useDispatch, useSelector } from "react-redux";
// import { setCartCount } from "../../store/cartSlice";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const cartCount = useSelector((state) => state?.cart?.count);
//   const dispatch = useDispatch();

//   //   const context = useContext(Context);
//   // const [cartProductCount, setCartProductCount] = useState(0);

//   const fetchUserAddToCart = async () => {
//     const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
//       method: SummaryApi.addToCartProductCount.method,
//       credentials: "include",
//     });

//     const dataApi = await dataResponse.json();

//     // console.log("data-user-api ", dataApi);
//     // setCartProductCount(dataApi?.data?.count);
//     dispatch(setCartCount(dataApi?.data?.count));
//   };

//   const loadingCart = new Array(cartCount).fill(null);

//   const fetchData = async () => {
//     const response = await fetch(SummaryApi.addToCartProductView.url, {
//       method: SummaryApi.addToCartProductView.method,
//       credentials: "include",
//       headers: {
//         "content-type": "application/json",
//       },
//     });

//     const responseData = await response.json();
//     console.log("responseDaata", responseData);

//     // if (responseData.success) {
//     //   // setData(responseData.data);
//     //   setData(responseData.data);
//     // }
//     if (responseData.success && responseData.data.length > 0) {
//       // Extract the products array from the response data
//       setData(responseData.data[0].products);
//     }
//   };

//   const handleLoading = async () => {
//     await fetchData();
//   };

//   useEffect(() => {
//     setLoading(true);
//     handleLoading();
//     setLoading(false);
//   }, []);

//   const increaseQty = async (id, qty) => {
//     const response = await fetch(SummaryApi.updateCartProduct.url, {
//       method: SummaryApi.updateCartProduct.method,
//       credentials: "include",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         _id: id,
//         quantity: qty + 1,
//       }),
//     });

//     const responseData = await response.json();

//     if (responseData.success) {
//       fetchData();
//       fetchUserAddToCart();
//     }
//   };

//   const decreaseQty = async (id, qty) => {
//     if (qty >= 2) {
//       const response = await fetch(SummaryApi.updateCartProduct.url, {
//         method: SummaryApi.updateCartProduct.method,
//         credentials: "include",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify({
//           quantity: qty - 1,
//           _id: id,
//         }),
//       });

//       const responseData = await response.json();

//       if (responseData.success) {
//         fetchData();
//         fetchUserAddToCart();
//       }
//     }
//   };

//   const deleteCartProduct = async (id) => {
//     const response = await fetch(SummaryApi.deleteCartProduct.url, {
//       method: SummaryApi.deleteCartProduct.method,
//       credentials: "include",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         _id: id,
//       }),
//     });

//     const responseData = await response.json();

//     if (responseData.success) {
//       fetchData();
//       fetchUserAddToCart();
//     }
//   };

//   const totalQty = data.reduce(
//     (previousValue, currentValue) => previousValue + currentValue.quantity,
//     0
//   );

//   const totalPrice = data.reduce(
//     (prev, curr) => prev + curr.quantity * curr?.productId?.sellingPrice,
//     0
//   );

//   const navigate = useNavigate();
//   const handleCheckout = () => {
//     navigate("/shopCheckout");
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="text-center text-lg my-3">
//         {data.length === 0 && !loading && (
//           <p className="bg-white py-5">No Data</p>
//         )}
//       </div>

//       <div className="flex flex-col lg:flex-row gap-10 lg:justify-between p-4">
//         {/* view product */}
//         <div className="w-full max-w-3xl">
//           {loading
//             ? loadingCart.map((el, index) => {
//                 return (
//                   <div
//                     key={el + "Add to cart loading" + index}
//                     className="w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded"
//                   ></div>
//                 );
//               })
//             : data.map((product, index) => {
//                 return (
//                   <div
//                     key={product?._id + "Add to cart loading"}
//                     className="w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]"
//                   >
//                     <div className="w-32 h-32 bg-slate-200">
//                       <img
//                         src={product?.productId?.productImage[0]}
//                         alt="product-img"
//                         className="w-full h-full object-scale-down mix-blend-multiply"
//                       />
//                     </div>
//                     <div className="px-4 py-2 relative">
//                       {/* delete products */}
//                       <div
//                         className="absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer"
//                         onClick={() => deleteCartProduct(product?._id)}
//                       >
//                         <MdDelete />
//                       </div>
//                       <h2 className="text-lg lg:text-xl text-ellipsis line-clamp-1">
//                         {product?.productId?.productName}
//                       </h2>
//                       <p className="capitalize text-slate-500">
//                         {product?.productId?.category}
//                       </p>
//                       <div className="flex justify-between items-center">
//                         <p className="text-red-600 font-medium text-lg">
//                           {product?.productId?.sellingPrice + " GBP"}
//                         </p>
//                         <p className="text-slate-600 font-semibold text-lg">
//                           {product?.productId?.sellingPrice *
//                             product?.quantity +
//                             " GBP"}
//                         </p>
//                       </div>
//                       <div className="flex items-center gap-3 mt-1">
//                         <button
//                           className="border border-red-600 hover:bg-red-600 text-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded"
//                           onClick={() =>
//                             decreaseQty(product?._id, product?.quantity)
//                           }
//                         >
//                           -
//                         </button>
//                         <span>{product?.quantity}</span>
//                         <button
//                           className="border border-red-600 hover:bg-red-600 text-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded"
//                           onClick={() =>
//                             increaseQty(product?._id, product?.quantity)
//                           }
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//         </div>

//         {/* summary */}
//         <div className="mt-5 lg:mt-0 w-full max-w-sm">
//           {loading ? (
//             <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse"></div>
//           ) : (
//             <div className="h-36 bg-white">
//               <h2 className="text-white bg-red-600 px-4 py-1">Summary</h2>
//               <div className="flex justify-between items-center px-4 gap-2 font-medium text-lg text-slate-600">
//                 <p>Quantity</p>
//                 <p>{totalQty}</p>
//               </div>
//               <div className="flex justify-between items-center px-4 gap-2 font-medium text-lg text-slate-600">
//                 <p>Total Price</p>
//                 <p>{totalPrice + " GBP"}</p>
//               </div>
//               <button
//                 className="bg-blue-600 p-2 mt-2 text-white w-full"
//                 onClick={handleCheckout}
//               >
//                 Proceed To Checkout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import SummaryApi from "../../common";
import { useDispatch, useSelector } from "react-redux";
import { setCartCount } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RedirectToLogin from "../../components/RedirectToLogin";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state?.user?.user);

  const userDetails = JSON.parse(localStorage.getItem("session"));

  const cartCount = useSelector((state) => state?.cart?.count);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      method: SummaryApi.addToCartProductCount.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();
    dispatch(setCartCount(dataApi?.data?.count));
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(SummaryApi.addToCartProductView.url, {
        method: SummaryApi.addToCartProductView.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
      });

      const responseData = await response.json();

      if (responseData.success && responseData.data.length > 0) {
        setData(responseData.data[0].products);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Failed to fetch cart data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchUserAddToCart();
  }, []);

  const increaseQty = async (id, qty) => {
    try {
      const response = await fetch(SummaryApi.updateCartProduct.url, {
        method: SummaryApi.updateCartProduct.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          quantity: qty + 1,
          userId: userDetails?._id,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        fetchData();
        fetchUserAddToCart();
      }
    } catch (error) {
      console.error("Failed to increase quantity", error);
    }
  };

  const decreaseQty = async (id, qty) => {
    if (qty >= 2) {
      try {
        const response = await fetch(SummaryApi.updateCartProduct.url, {
          method: SummaryApi.updateCartProduct.method,
          credentials: "include",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            _id: id,
            quantity: qty - 1,
            userId: userDetails?._id,
          }),
        });

        const responseData = await response.json();

        if (responseData.success) {
          fetchData();
          fetchUserAddToCart();
        }
      } catch (error) {
        console.error("Failed to decrease quantity", error);
      }
    }
  };

  const deleteCartProduct = async (e, id) => {
    e.preventDefault();
    // console.log("object", id);
    try {
      const response = await fetch(SummaryApi.deleteCartProduct.url, {
        method: SummaryApi.deleteCartProduct.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
          userId: userDetails?._id,
        }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        fetchData();
        fetchUserAddToCart();
        toast.success("Product deleted");
      }
    } catch (error) {
      console.error("Failed to delete product", error);
      toast.error("Failed to delete product", error);
    }
  };

  const totalQty = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );

  const totalPrice = data.reduce(
    (prev, curr) => prev + curr.quantity * curr?.productId?.sellingPrice,
    0
  );

  const handleCheckout = () => {
    navigate("/shopCheckout");
  };

  const handleClickShop = () => {
    navigate("/shop");
  };

  return (
    <>
      {user?._id ? (
        <>
          {cartCount === 0 ? (
            <div className="h-96 flex flex-col justify-center items-center">
              <p className="text-xl uppercase text-red-600">
                No Products Added In the Cart
              </p>
              <p className="text-xl uppercase text-red-600">
                Move To Shop To Add Products First
              </p>
              <button
                onClick={handleClickShop}
                className="border border-red-600 hover:bg-red-600 text-red-600 hover:text-white w-12 flex justify-center items-center rounded"
              >
                Shop
              </button>
            </div>
          ) : (
            <div className="container mx-auto p-4">
              <div className="text-center text-lg my-3">
                {data.length === 0 && !loading && (
                  <p className="bg-white py-5">No Data</p>
                )}
              </div>

              <div className="flex flex-col lg:flex-row gap-10 lg:justify-between p-4">
                {/* view product */}
                <div className="w-full max-w-3xl">
                  {loading
                    ? new Array(cartCount)
                        .fill(null)
                        .map((_, index) => (
                          <div
                            key={"Add to cart loading" + index}
                            className="w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded"
                          ></div>
                        ))
                    : data.map((product, index) => (
                        <div
                          key={product?._id + "Add to cart loading"}
                          className="w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]"
                        >
                          <div className="w-32 h-32 bg-slate-200">
                            <img
                              src={product?.productId?.productImage[0]}
                              alt="product-img"
                              className="w-full h-full object-scale-down mix-blend-multiply"
                            />
                          </div>
                          <div className="px-4 py-2 relative">
                            {/* delete products */}
                            <div
                              className="absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer"
                              onClick={(e) =>
                                deleteCartProduct(e, product?._id)
                              }
                            >
                              <MdDelete />
                            </div>
                            <h2 className="text-lg lg:text-xl text-ellipsis line-clamp-1">
                              {product?.productId?.productName}
                            </h2>
                            <p className="capitalize text-slate-500">
                              {product?.productId?.category}
                            </p>
                            <div className="flex justify-between items-center">
                              <p className="text-red-600 font-medium text-lg">
                                {product?.productId?.sellingPrice + " GBP"}
                              </p>
                              <p className="text-slate-600 font-semibold text-lg">
                                {product?.productId?.sellingPrice *
                                  product?.quantity +
                                  " GBP"}
                              </p>
                            </div>
                            <div className="flex items-center gap-3 mt-1">
                              <button
                                className="border border-red-600 hover:bg-red-600 text-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded"
                                onClick={() =>
                                  decreaseQty(product?._id, product?.quantity)
                                }
                              >
                                -
                              </button>
                              <span>{product?.quantity}</span>
                              <button
                                className="border border-red-600 hover:bg-red-600 text-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded"
                                onClick={() =>
                                  increaseQty(product?._id, product?.quantity)
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                </div>

                {/* summary */}
                <div className="mt-5 lg:mt-0 w-full max-w-sm">
                  {loading ? (
                    <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse"></div>
                  ) : (
                    <div className="h-36 bg-white">
                      <h2 className="text-white bg-red-600 px-4 py-1">
                        Summary
                      </h2>
                      <div className="flex justify-between items-center px-4 gap-2 font-medium text-lg text-slate-600">
                        <p>Quantity</p>
                        <p>{totalQty}</p>
                      </div>
                      <div className="flex justify-between items-center px-4 gap-2 font-medium text-lg text-slate-600">
                        <p>Total Price</p>
                        <p>{totalPrice + " GBP"}</p>
                      </div>
                      <button
                        className="bg-blue-600 p-2 mt-2 text-white w-full"
                        onClick={handleCheckout}
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <RedirectToLogin />
      )}
    </>
  );
};

export default Cart;
