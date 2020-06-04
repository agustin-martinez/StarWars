import React from "react";
import logo from "../../src/assets/logo.png";
import "../App.css";

const Header = ({ setScreenFromHeader }) => {
  return (
    <header>
      <div className="logo-box">
        <img
          className="logo-pic"
          onClick={() => setScreenFromHeader("Start")}
          src={logo}
          alt="StarWars"
        ></img>
      </div>
    </header>
  );
};

export default Header;
