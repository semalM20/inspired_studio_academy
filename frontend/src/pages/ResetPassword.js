import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        `${SummaryApi.resetPassword.url}?token=${token}`,
        { password }
      );
      toast.success(response.data.message);
      navigate("/login");
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-96">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Password:</label>
          <div className="bg-slate-100 p-2 flex">
            <input
              type="password"
              value={password}
              placeholder="enter password"
              name="password"
              className="w-full h-full outline-none bg-transparent"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label>Confirm Password:</label>
          <div className="bg-slate-100 p-2 flex">
            <input
              type="password"
              value={confirmPassword}
              placeholder="enter password"
              name="password"
              className="w-full h-full outline-none bg-transparent"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-3 py-1 m-2 rounded-full text-white bg-red-600 hover:bg-red-700"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
