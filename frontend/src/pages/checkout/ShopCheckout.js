import React, { useState } from "react";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import RedirectToLogin from "../../components/RedirectToLogin";

const ShopCheckout = () => {
  const navigate = useNavigate();

  const cartCount = useSelector((state) => state?.cart?.count);

  const user = useSelector((state) => state?.user?.user);

  const userDetails = JSON.parse(localStorage.getItem("session"));

  //for user details
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    postalCode: "",
    address: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserData((preve) => {
      return {
        ...preve,
        [name]: value,
        };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(SummaryApi.shopUserDetails.url, {
      method: SummaryApi.shopUserDetails.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...userData,
        userId: userDetails?._id,
      }),
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      toast.success(dataApi.message);
      setTimeout(() => {
        navigate("/checkoutSummary");
      }, 2000);
    }

    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  const handleClickShop = () => {
    navigate("/shop");
  };

  return (
    <>
      {user?._id ? (
        <>
          {cartCount > 0 ? (
            <div className="mx-auto container p-4">
              <p className="text-right text-red-600 text-xl mr-5">
                <sup>**</sup> Products are non-refundable
              </p>

              <p className="text-center pt-2 text-red-600 text-2xl uppercase font-bold underline">
                Checkout Page
              </p>

              <div className="pt-6 flex flex-col lg:flex-row gap-10 lg:justify-around p-4">
                {/* checkout user details */}
                <form
                  className="flex flex-col gap-2 lg:w-1/2 w-full"
                  onSubmit={handleSubmit}
                >
                  <h3 className="text-xl text-red-600 font-semibold text-center">
                    Please Enter Your Details
                  </h3>
                  <div className="grid mx-4 lg:mx-16">
                    <label>Name: </label>
                    <div className="bg-slate-100 p-2">
                      <input
                        type="text"
                        placeholder="enter your name"
                        name="name"
                        value={userData.name}
                        onChange={handleOnChange}
                        required
                        className="w-full h-full outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid mx-4 lg:mx-16">
                    <label>Email: </label>
                    <div className="bg-slate-100 p-2">
                      <input
                        type="email"
                        placeholder="enter email"
                        name="email"
                        value={userData.email}
                        onChange={handleOnChange}
                        required
                        className="w-full h-full outline-none bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid mx-4 lg:mx-16">
                    <label>Phone Number: </label>
                    <div className="bg-slate-100 p-2">
                      <input
                        type="number"
                        placeholder="enter phone number"
                        name="phoneNumber"
                        value={userData.phoneNumber}
                        onChange={handleOnChange}
                        required
                        className="w-full h-full outline-none bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-16">
                    <div className="grid w-full lg:w-1/2 pr-0 lg:pr-2">
                      <label>City: </label>
                      <div className="bg-slate-100 p-2">
                        <input
                          type="text"
                          placeholder="enter city name"
                          name="city"
                          value={userData.city}
                          onChange={handleOnChange}
                          required
                          className="w-full h-full outline-none bg-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid w-full lg:w-1/2 pl-0 lg:pl-2">
                      <label>Postal Code: </label>
                      <div className="bg-slate-100 p-2">
                        <input
                          type="text"
                          placeholder="enter postal code"
                          name="postalCode"
                          value={userData.postalCode}
                          onChange={handleOnChange}
                          required
                          className="w-full h-full outline-none bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid mx-4 lg:mx-16">
                    <label>Address: </label>
                    <div className="bg-slate-100 p-2">
                      <input
                        type="text"
                        placeholder="enter address"
                        name="address"
                        value={userData.address}
                        onChange={handleOnChange}
                        required
                        className="w-full h-full outline-none bg-transparent"
                      />
                    </div>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white w-full px-6 py-2 max-w-[200px] rounded hover:scale-110 transition-all mx-auto block mt-2 border border-black">
                    Submit Your Details
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="h-96 flex flex-col justify-center items-center">
              <p className="uppercase text-2xl text-red-600">
                There are no products in cart
              </p>
              <p className="uppercase text-2xl text-red-600">
                Add products to view checkout summary
              </p>
              <button
                onClick={handleClickShop}
                className="border border-red-600 hover:bg-red-600 text-red-600 hover:text-white w-12 flex justify-center items-center rounded"
              >
                Shop
              </button>
            </div>
          )}
        </>
      ) : (
        <RedirectToLogin />
      )}

      <Footer />
    </>
  );
};

export default ShopCheckout;