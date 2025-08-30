import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword as createUser } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

function SignUp() {
  const Navigate = useNavigate();
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [ErrorsDetected, setErrorsDetected] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const UserCred = await createUser(auth, Email, Password);
      const User = UserCred.user;

      await setDoc(doc(db, "users", User.uid), {
        name: UserName,
        email: User.email,
        createdAt: new Date(),
        cart: [],
        wishlist: [],
        orders: [],
      });
      setUserName("");
      setEmail("");
      setPassword("");
      console.log("success");
      Navigate("/");
    } catch (err) {
      if (err.message === "Firebase: Error (auth/email-already-in-use).") {
        setErrorsDetected("Email Already In Use");
      } else if (
        err.message ===
        "Firebase: Missing password requirements: [Password must contain at least 8 characters] (auth/password-does-not-meet-requirements)."
      ) {
        setErrorsDetected("Password must contain at least 8 characters");
      } else setErrorsDetected(err.message);
    }
  };

  return (
    <div className="SignUpBody">
      <h2>SignUp</h2>
      {ErrorsDetected && <p>{ErrorsDetected}</p>}
      <form onSubmit={HandleSubmit}>
        <label>
          FullName
          <input
            type="text"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="FullName"
          />
        </label>
        <label>
          Email
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
        <button>SignUp</button>
      </form>
      <p>Already a Member?</p>
      <Link to="/login">LogIn</Link>
    </div>
  );
}

export default SignUp;
