// import React, { useEffect, useState } from "react";
// import addToCart from "../cart/AddToCart";
// import { Link } from "react-router-dom";
// import SummaryApi from "../../common";

// const ShopProductDetails = ({ category, heading }) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const loadingLst = new Array(13).fill(null);

//   //   const { fetchUserAddToCart } = useContext(Context);

//   const [cartProductCount, setCartProductCount] = useState(0);

//   const fetchUserAddToCart = async () => {
//     const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
//       method: SummaryApi.addToCartProductCount.method,
//       credentials: "include",
//     });

//     const dataApi = await dataResponse.json();

//     console.log("data-user-api ", dataApi);
//     setCartProductCount(dataApi?.data?.count);
//   };
//   const handleAddToCart = async (e, id) => {
//     await addToCart(e, id);
//     fetchUserAddToCart();
//   };

//   const fetchData = async () => {
//     setLoading(true);
//     const response = await fetch(SummaryApi.allProduct.url, {
//       method: SummaryApi.allProduct.method,
//       headers: {
//         "content-type": "application/json",
//       },
//     });
//     const dataResponse = await response.json();
//     setLoading(false);
//     console.log(dataResponse.data);
//     setData(dataResponse?.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="container mx-auto px-4 my-6 relative">
//       <h2 className="text-2xl font-semibold py-4">{heading}</h2>
//       <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-between md:gap-6 overflow-x-scroll scrollbar-none transition-all">
//         {loading
//           ? loadingLst.map((product, index) => {
//               return (
//                 <div
//                   key={index}
//                   className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow "
//                 >
//                   <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse"></div>
//                   <div className="p-4 grid gap-3">
//                     <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200"></h2>
//                     <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-2"></p>
//                     <div className="flex gap-3">
//                       <p className="text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-2"></p>
//                       <p className="text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-2"></p>
//                     </div>
//                     <button className="text-sm text-white px-3 rounded-full animate-pulse bg-slate-200 py-2"></button>
//                   </div>
//                 </div>
//               );
//             })
//           : data.map((product, index) => {
//               return (
//                 <Link
//                   key={index}
//                   to={"/shop/products/" + product?._id}
//                   className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow"
//                   onClick={scrollTop}
//                 >
//                   <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center">
//                     <img
//                       src={product?.productImage[0]}
//                       alt="product-img"
//                       className="object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply"
//                     />
//                   </div>
//                   <div className="p-4 grid gap-3">
//                     <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
//                       {product?.productName}
//                     </h2>
//                     <p className="capitalize text-slate-500">
//                       {product?.category}
//                     </p>
//                     <div className="flex gap-3">
//                       <p className="text-red-600 font-medium">
//                         {product?.sellingPrice + " GBP"}
//                       </p>
//                       <p className="text-slate-500 line-through">
//                         {product?.price + " GBP"}
//                       </p>
//                     </div>
//                     <button
//                       className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full"
//                       onClick={(e) => {
//                         handleAddToCart(e, product?._id);
//                       }}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </Link>
//               );
//             })}
//       </div>
//     </div>
//   );
// };

// export default ShopProductDetails;

import React, { useEffect, useState } from "react";
import addToCart from "../cart/AddToCart";
import { Link } from "react-router-dom";
import SummaryApi from "../../common";
import { setCartCount } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const ShopProductDetails = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const userDetails = JSON.parse(localStorage.getItem("session"));

  const loadingLst = new Array(13).fill(null);

  // const { fetchUserAddToCart } = useContext(Context);

  // const [cartProductCount, setCartProductCount] = useState(0);

  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      method: SummaryApi.addToCartProductCount.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();

    // console.log("data-user-api ", dataApi);
    // setCartProductCount(dataApi?.data?.count);
    dispatch(setCartCount(dataApi?.data?.count));
  };
  const handleAddToCart = async (e, id, uId) => {
    await addToCart(e, id, uId);
    fetchUserAddToCart();
  };

  const fetchCategoryWiseProduct = async (category) => {
    const response = await fetch(SummaryApi.categoryWiseProduct.url, {
      method: SummaryApi.categoryWiseProduct.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        category: category,
      }),
    });

    const dataResponse = await response.json();
    // console.log(dataResponse);

    return dataResponse;
  };
  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setLoading(false);

    setData(categoryProduct?.data);
  };

  useEffect(() => {
    fetchData();
    fetchUserAddToCart();
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 my-6 relative">
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-between md:gap-6 overflow-x-scroll scrollbar-none transition-all">
        {loading
          ? loadingLst.map((product, index) => {
              return (
                <div
                  key={index}
                  className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow "
                >
                  <div className="bg-slate-200 h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse"></div>
                  <div className="p-4 grid gap-3">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-slate-200"></h2>
                    <p className="capitalize text-slate-500 p-1 animate-pulse rounded-full bg-slate-200 py-2"></p>
                    <div className="flex gap-3">
                      <p className="text-red-600 font-medium p-1 animate-pulse rounded-full bg-slate-200 w-full py-2"></p>
                      <p className="text-slate-500 line-through p-1 animate-pulse rounded-full bg-slate-200 w-full py-2"></p>
                    </div>
                    <button className="text-sm text-white px-3 rounded-full animate-pulse bg-slate-200 py-2"></button>
                  </div>
                </div>
              );
            })
          : data.map((product, index) => {
              return (
                <Link
                  key={index}
                  to={"/shop/products/" + product?._id}
                  className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow "
                  onClick={scrollTop}
                >
                  <div className="bg-white h-48 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center">
                    <img
                      src={product?.productImage[0]}
                      alt="product-img"
                      className="object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply"
                    />
                  </div>
                  <div className="p-4 grid gap-3">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                      {product?.productName}
                    </h2>
                    <p className="capitalize text-slate-500">
                      {product?.category}
                    </p>
                    <div className="flex gap-3">
                      <p className="text-red-600 font-medium">
                        {product?.sellingPrice + " GBP"}
                      </p>
                      <p className="text-slate-500 line-through">
                        {product?.price + " GBP"}
                      </p>
                    </div>
                    <button
                      className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full"
                      onClick={(e) => {
                        handleAddToCart(e, product?._id, userDetails?._id);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default ShopProductDetails;
