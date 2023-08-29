import React, { useContext, useState } from "react";
import "./../assets/css/SignUpPage.css";
import axios from "axios";
import { Ctx } from "./../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [auth, setAuth] = useContext(Ctx);
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const trackName = (e) => {
    setName(e.target.value);
  };

  const trackEmail = (e) => {
    setEmail(e.target.value);
  };

  const trackPhone = (e) => {
    setPhone(e.target.value);
  };

  const trackPassword = (e) => {
    setPassword(e.target.value);
  };

  const trackConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const requestInfo = {
    url: "https://blogg-61bi.onrender.com/api/v1/users/signup",
    // url: "http://localhost:5050/api/v1/users/signup",
    method: "POST",
    data: {
      name,
      phone,
      email,
      password,
      confirmpassword,
    },
    headers: {
      "Content-type": "Application/json",
      withCredentials: true,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios(requestInfo);
    const token = await response.data.token;
    alert(`Welcome ${name}, your account as been created succssfully`);
    setAuth({token});
    navigate('/Dashboard')
  };

  return (
    <>
      <div className="signup">
        <h1>Sign Up </h1>
        <p>Please fill in this form to create an account!</p>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="text" style={{ display: "none" }}></label>
          <input type="text" placeholder="Name" onChange={trackName} required />
          <input
            type="email"
            placeholder="Email"
            onChange={trackEmail}
            required
          />
          <input
            type="text"
            placeholder="Phone"
            onChange={trackPhone}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={trackPassword}
            minLength={8}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={trackConfirmPassword}
            required
          />
          <button type="submit" className="signUp-btn">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
