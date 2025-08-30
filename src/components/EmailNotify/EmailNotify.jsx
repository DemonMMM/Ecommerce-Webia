import React, { useState } from "react";
import "./emailNotify.css";

function EmailNotify() {
  const [InputValue, setInputValue] = useState("");
  const OnSubmit = () => {
    setInputValue("");
  };
  return (
    <div className="EmailNotify">
      <h2>Get Discount and Offer Notification on Email</h2>
      <div>
        <input
          type="email"
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={OnSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default EmailNotify;
