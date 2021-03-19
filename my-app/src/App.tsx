import logo from "./logo.svg";
import "./App.css";
import { Header, Home, About, Projects, Work, Avalon } from "../src/components";
import styled, { css, keyframes } from "styled-components";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Contact } from "./components/contact";

const BackgroundWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 150vw;
  background-image: url("background.jpg");
  background-repeat: no-repeat;
  background-size: 100vw;
`;

function App() {
  const [currentRoute, setCurrentRoute] = useState<number>(0);
  console.log("CurrentRoute", currentRoute);
  return (
    <Router>
      <div className="App">
        <BackgroundWrapper />
        <Header value={currentRoute} />
        <Switch>
          <Route path="/about">
            <About setStateHeader={setCurrentRoute} />
          </Route>
          <Route path="/projects">
            <Projects setStateHeader={setCurrentRoute} />
          </Route>
          <Route path="/work">
            <Work setStateHeader={setCurrentRoute} />
          </Route>
          <Route path="/contact">
            <Contact setStateHeader={setCurrentRoute} />
          </Route>
          <Route path="/avalon">
            <Avalon />
          </Route>
          <Route path="/">
            <Home setStateHeader={setCurrentRoute} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
