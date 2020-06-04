import React from "react";
import "../App.css";

const Start = () => (
  <div className="start-box">
    <div className="line-header-bottom"></div>
    <div className="start-btm-box">
      <button className="btm-persons">PERSONS</button>
      <button className="btm-planets">PLANETS</button>
      <button className="btm-favourites">FAVOURITES</button>
    </div>
    <div className="line-header-bottom"></div>
    <section class="star-wars">
      <div class="crawl">
        <div class="title">
          <p>Episode REACT.JS</p>
          <h1>A New Hope</h1>
        </div>
        <p>Search for persons or planets from the Star-Wars universe!</p>
        <p>
          Add them to your favouritelist or create your own favourite planets
          and characters.
        </p>
      </div>
    </section>
  </div>
);

export default Start;
