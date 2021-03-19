import logo from "./logo.svg";
import "./App.css";
import { Header, Home, About, Work } from "../src/components";
import styled, { css, keyframes } from "styled-components";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const BackgroundWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 150vw;
  background-image: url("background.jpg");
  background-repeat: no-repeat;
  background-size: 100vw;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <BackgroundWrapper />
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
