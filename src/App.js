import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/style.sass";
import Options from "./components/Options.js";
import Page from "./Page.js";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="options">
          <Options />
        </header>
        <main className="app__page">
          <Page />
        </main>
      </div>
    </Router>
  );
};

export default App;
