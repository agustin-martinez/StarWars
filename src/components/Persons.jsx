import React from "react";
import "../App.css";

const Persons = () => (
  <div className="persons-box">
    <input className="input-search" type="text" placeholder="Search" />
    <div className="card-raid">
      <section class="card-box">
        <div class="card-text">
          <div class="card-title">
            <h3>Luke Persons</h3>
          </div>
          <div className="card-info">
            <p>
              <span>Homeworld:</span> Tatooine
            </p>
            <p>
              <span>Birth date:</span> 19BBY
            </p>
          </div>
        </div>
        <button className="card-btm">Add to favourites</button>
      </section>
      <section class="card-box">
        <div class="card-text">
          <div class="card-title">
            <h3>Luke Persons</h3>
          </div>
          <div className="card-info">
            <p>
              <span>Homeworld:</span> Tatooine
            </p>
            <p>
              <span>Birth date:</span> 19BBY
            </p>
          </div>
        </div>
        <button className="card-btm">Add to favourites</button>
      </section>
      <section class="card-box">
        <div class="card-text">
          <div class="card-title">
            <h3>Luke Persons</h3>
          </div>
          <div className="card-info">
            <p>
              <span>Homeworld:</span> Tatooine
            </p>
            <p>
              <span>Birth date:</span> 19BBY
            </p>
          </div>
        </div>
        <button className="card-btm">Add to favourites</button>
      </section>
    </div>
  </div>
);

export default Persons;
