import React, { useContext, useState } from "react";
import "./../assets/css/Header.css";
import images from "../assets/images/images";
import { Link } from "react-router-dom";
import { Ctx } from "../context/AuthContext";

const Header = () => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [auth, setAuth] = useContext(Ctx);

  const logOut = () => {
    localStorage.clear()
    setAuth("");
  };

  return (
    <>
      <div className="header">
        <div>
          <img src={images[0]} alt="" className="book" />
        </div>
        <h2 style={{color: 'white'}}>{localStorage.getItem('userRole')}</h2>
        <div className="profile">
          <img src={images[1]} alt="" className="bell" />
          <img
            src={images[2]}
            alt=""
            onClick={() => setDisplayDropdown(!displayDropdown)}
          />
        </div>
      </div>

      <div className={displayDropdown ? "dropdown" : "hide"}>
        <ul>
          <p>Welcome <strong>{localStorage.getItem('userName')}</strong> </p>
          <hr/>
          <Link to={"/Dashboard"} className="gg">
            <li>Dashboard</li>
          </Link>
          <Link to={"/Dashboard/about"} className="gg">
            <li>Profile</li>
          </Link>
          <Link to={"/Dashboard/post"} className="gg">
            <li>Create Post</li>
          </Link>
          <hr/>
          <Link className="gg">
            <li onClick={logOut} >Logout</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
