import React, { useState, useEffect } from "react";
import "./App.css";
import Start from "./components/Start";
import Header from "./components/Header";
import Persons from "./components/Persons";
import Planets from "./components/Planets";
import FavPersons from "./components/FavPersons";
import FavPlanets from "./components/FavPlanets";
import AllFavourites from "./components/AllFavourites.jsx";

function App() {
  const START = "Start",
    HEADER = "Header",
    PERSONS = "Persons",
    PLANETS = "Planets",
    FAV_PERSONS = "FavPersons",
    FAV_PLANETS = "FavPlanets",
    ALL_FAVOURITES = "AllFavourites";

  const [currentScreen, setCurrentScreen] = useState(START);
  const [favourites, setFavourites] = useState([]);
  const [persons, setPersons] = useState([]);
  const [planets, setPlanets] = useState([]);

  const addFavourite = (items) => {
    setFavourites([...favourites, items]);
  };

  let content = null;
  switch (currentScreen) {
    case START:
      content = <Start />;
      break;
    case HEADER:
      content = <Header />;
      break;
    case PERSONS:
      content = (
        <Persons
          items={persons}
          setPersons={setPersons}
          addFavourite={addFavourite}
        />
      );
      break;
    case PLANETS:
      content = (
        <Planets
          items={planets}
          setPlanets={setPlanets}
          addFavourite={addFavourite}
        />
      );
      break;
    case FAV_PERSONS:
      content = <FavPersons />;
      break;
    case FAV_PLANETS:
      content = <FavPlanets />;
      break;
    case ALL_FAVOURITES:
      content = (
        <AllFavourites
          favourites={favourites}
          setFavourites={setFavourites}
          addFavourite={addFavourite}
        />
      );
      break;
    default:
      content = <Start />;
  }

  useEffect(() => {
    let listPersons = [];
    function getData(url) {
      fetch(url)
        .then((res) => res.json())
        .then(async (response) => {
          let next = response.next;
          if (next !== null) {
            await getData(next);
            response.results.forEach((persons) => listPersons.push(persons));
          } else {
            setPersons(listPersons);
          }
        });
    }
    getData("https://swapi.dev/api/people/");
  }, []);

  useEffect(() => {
    let listPlanets = [];
    function getData(url) {
      fetch(url)
        .then((res) => res.json())
        .then(async (response) => {
          let next = response.next;
          if (next !== null) {
            await getData(next);
            response.results.forEach((planets) => listPlanets.push(planets));
          } else {
            setPlanets(listPlanets);
          }
        });
    }
    getData("https://swapi.dev/api/planets");
  }, []);

  return (
    <div className="App">
      <header>
        <Header setScreenFromHeader={setCurrentScreen} />
      </header>
      <main>{content}</main>
    </div>
  );
}

export default App;
