import React, { useState } from "react";
import "./Navbar.css";
import SettingsIcon from "@material-ui/icons/Settings";

function Navbar() {
  const customStyle = {
    fontSize: "18px"
  };

  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
    console.log(show);
  }

  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="logo">
          <a href="homepage.html">Chit Chat</a>
        </div>

        <div className="search_box">
          <input
            type="text"
            className="input_search"
            placeholder="What are you looking for"
          />
          <div className="search_btn">
            <i className="fas fa-search"></i>
          </div>
        </div>

        <div className="nav_right">
          <ul>
            <li className="nr_li dd_main">
              <i className="fas fa-caret-down" onClick={handleClick}></i>
              <i className="fas fa-user-alt"></i>
              <div className="dd_menu" style={{ display: !show && "none" }}>
                <div className="dd_left">
                  <ul>
                    <li>
                      <i className="fas fa-home"></i>
                    </li>
                    <li>
                      <i className="fas fa-blog"></i>
                    </li>
                    <li></li>
                    <li>
                      <i className="far fa-plus-square"></i>
                    </li>
                    <li>
                      <i class="fas fa-cog"></i>
                    </li>
                    <li></li>
                  </ul>
                </div>
                <div className="dd_right">
                  <ul>
                    <li>Home</li>
                    <li style={customStyle}>My Posts</li>
                    <li></li>
                    <li>Friends</li>
                    <li>Settings</li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="nr_li">
              <button
                type="button"
                id="log-out"
                className="btn btn-light"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Log Out"
              >
                <i className="fas fa-sign-out-alt"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
