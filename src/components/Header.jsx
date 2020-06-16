import React from "react";
import logo from "../../src/assets/logo.png";
import "../App.css";

const Header = ({ setScreenFromHeader }) => {
  return (
    <div className="header-box">
      <div className="logo-box">
        <img
          className="logo-pic"
          onClick={() => setScreenFromHeader("Start")}
          src={logo}
          alt="StarWars"
        ></img>
      </div>
      <div className="line-header-top"></div>
      <div className="start-btm-box">
        <button
          className="btm-persons"
          onClick={() => setScreenFromHeader("Persons")}
        >
          PERSONS
        </button>
        <button
          className="btm-planets"
          onClick={() => setScreenFromHeader("Planets")}
        >
          PLANETS
        </button>
        <li className="dropdown">
          <button className="btm-favourites">FAVOURITES</button>
          <div className="dropdown-content">
            <div onClick={() => setScreenFromHeader("FavPersons")}>Persons</div>
            <div onClick={() => setScreenFromHeader("FavPlanets")}>Planets</div>
            <div onClick={() => setScreenFromHeader("AllFavourites")}>
              All favourites
            </div>
          </div>
        </li>
      </div>
      <div className="line-header-bottom"></div>
    </div>
  );
};

export default Header;
