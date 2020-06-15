import React, { useState } from "react";
import "./App.css";
import Start from "./components/Start";
import Header from "./components/Header";
import Persons from "./components/Persons";
import Planets from "./components/Planets";
import Favourites from "./components/Favourites";

function App() {
  const START = "Start",
    HEADER = "Header",
    PERSONS = "Persons",
    PLANETS = "Planets",
    FAVOURITES = "Favourites";

  const [currentScreen, setCurrentScreen] = useState(START);

  let content = null;
  switch (currentScreen) {
    case START:
      content = <Start />;
      break;
    case HEADER:
      content = <Header />;
      break;
    case PERSONS:
      content = <Persons />;
      break;
    case PLANETS:
      content = <Planets />;
      break;
    case FAVOURITES:
      content = <Persons />;
      break;
    default:
      content = <Start />;
  }

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
