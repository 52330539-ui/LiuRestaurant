import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/"); // redirect to home
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-gray-200 shadow-xl rounded-2xl p-10 w-full max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-center text-yellow-400">
          Create Account
        </h1>

        <form className="space-y-5" onSubmit={handleSignup}>
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Verification Code */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Verification Code
            </label>
            <input
              type="text"
              placeholder="Enter the 4-digit code"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-400 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 py-2 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
