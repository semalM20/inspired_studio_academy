import React, { useState } from "react";
import axios from "axios";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(SummaryApi.forgotPassword.url, {
        email,
      });
      // console.log(response);

      toast.success(response.data.message);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-96">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address:</label>
          <div className="bg-slate-100 p-2 flex">
            <input
              type="email"
              placeholder="enter email"
              name="email"
              className="w-full h-full outline-none bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
