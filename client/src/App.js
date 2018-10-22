import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Spades from "./components/Spades";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/spades" activeClassName="activeNavButton">
              Spades
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route exact path="/spades" render={props => <Spades />} />
      </div>
    );
  }
}

export default App;
