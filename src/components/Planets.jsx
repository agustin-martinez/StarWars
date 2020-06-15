import React from "react";
import "../App.css";

const Planets = () => (
  <div className="planets-box">
    <input className="input-search" type="text" placeholder="Search" />
    <div className="card-raid">
      <section class="card-box">
        <div class="card-text">
          <div class="card-title">
            <h3>Luke Planets</h3>
          </div>
          <div className="card-info">
            <p>
              <span>Homeworld: </span>Tatooine
            </p>
            <p>
              <span>Birth date: </span>19BBY
            </p>
          </div>
        </div>
        <button className="card-btm">Add to favourites</button>
      </section>
      <section class="card-box">
        <div class="card-text">
          <div class="card-title">
            <h3>Luke Planets</h3>
          </div>
          <div className="card-info">
            <p>
              <span>Homeworld: </span>Tatooine
            </p>
            <p>
              <span>Birth date: </span>19BBY
            </p>
          </div>
        </div>
        <button className="card-btm">Add to favourites</button>
      </section>
    </div>
  </div>
);

export default Planets;
