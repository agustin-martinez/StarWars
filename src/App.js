import React, { useState } from "react";
import "./App.css";
import Start from "./components/Start";
import Header from "./components/Header";

function App() {
  const START = "Start",
    HEADER = "Header";

  const [currentScreen, setCurrentScreen] = useState(START);

  let content = null;
  switch (currentScreen) {
    case START:
      content = <Start />;
      break;
    case HEADER:
      content = <Header />;
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
