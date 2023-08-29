import React, { useState } from "react";
// import './toggle.css'
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const TogglePage = () => {
  const [index, setIndex] = useState(true);

  const handleToggle = () => {
    setIndex(!index);
  };

  return (
    <div className="displayBackgroung">
      {index ? (
        <div>
          <LoginPage />
        </div>
      ) : (
        <div>
          <SignUpPage />
        </div>
      )}

      <button className="btn" onClick={handleToggle}>
        {index
          ? "New to Blogg? Join now"
          : "Already have an account? Login here"}{" "}
      </button>
    </div>
  );
};

export default TogglePage;
