import React from "react";
import { useNavigate } from "react-router-dom";
import imageleft from "../assets/imageleft.jpg";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="Login">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${imageleft})` }}
      ></div>

      <div className="rightSide">
        <h1> NEW MEMBER?
        </h1>
          <p class="text-lg text-white-800 font-medium p-4 m-2">join us to get students vouchers!</p>

        <button 
            className="w-full bg-yellow-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-200"
          onClick={() => navigate("/signup")}
          style={{
            marginBottom: "20px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>

        <form id="contact-form" method="POST">
          <p class="text-lg text-white-800 font-medium p-4 m-2">Already a Member?</p>
          <label htmlFor="name">Full Name/ID</label>
          <input name="name" placeholder="Enter full name/ID..." type="text" />

          <label htmlFor="email">Password</label>
          <input name="email" placeholder="Enter pass..." type="Password" />

          <button
                    className="w-full bg-yellow-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-600 transition duration-200"
  >Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
