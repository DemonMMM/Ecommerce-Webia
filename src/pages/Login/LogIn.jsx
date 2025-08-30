import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword as signIn } from "firebase/auth";
import { auth } from "../../firebase";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Toast } from "../../features/Toast";

function LogIn() {
  const Navigate = useNavigate();
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [IsViewable, setIsViewable] = useState(false);
  const [ErrorsDetected, setErrorsDetected] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signIn(auth, UserName, Password);
      const user = userCred.user;
      Toast.success("Login Successful!");
      setUserName("");
      setPassword("");
      Navigate("/");
    } catch (err) {
      setErrorsDetected(err.message);
    }
  };

  const HandleView = () => {
    setIsViewable((prev) => !prev);
  };

  return (
    <div className="LoginBody">
      <h2>LogIn</h2>
      {ErrorsDetected && <p>{ErrorsDetected}</p>}
      <form onSubmit={HandleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="UserName"
          />
        </label>
        <label>
          Password
          <input
            type={IsViewable ? "text" : "password"}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="PasswordView" type="button" onClick={HandleView}>
            {IsViewable ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </label>
        <div className="ButtonWrapper">
          <button className="LoginBodybutton" type="submit">
            LogIn
          </button>
        </div>
      </form>
      <p>Not a Member?</p>
      <Link to="/signUp">SignUp</Link>
    </div>
  );
}

export default LogIn;
