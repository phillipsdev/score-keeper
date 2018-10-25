import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Canasta from "./components/canasta/Canasta";
import Canadian_Bacon from "./components/can_bacon/Canadian_Bacon";
import Canadian_Salad from "./components/can_salad/Canadian_Salad";
import Domino_Train from "./components/domino_train/Domino_Train";
import Farkle from "./components/farkle/Farkle";
import Twisted_Farkle from "./components/twisted_farkle/Twisted_Farkle";
import Hearts from "./components/hearts/Hearts";
import Spades from "./components/spades/Spades";
import Yahtzee from "./components/yahtzee/Yahtzee";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faInfoCircle);

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
            <NavLink to="/canadian_bacon" activeClassName="activeNavButton">
              Canadian Bacon
            </NavLink>
          </li>
          <li>
            <NavLink to="/canadian_salad" activeClassName="activeNavButton">
              Canadian Salad
            </NavLink>
          </li>
          <li>
            <NavLink to="/canasta" activeClassName="activeNavButton">
              Canasta
            </NavLink>
          </li>
          <li>
            <NavLink to="/domino_train" activeClassName="activeNavButton">
              Domino Train
            </NavLink>
          </li>
          <li>
            <NavLink to="/farkle" activeClassName="activeNavButton">
              Farkle
            </NavLink>
          </li>
          <li>
            <NavLink to="/twisted_farkle" activeClassName="activeNavButton">
              Twisted Farkle
            </NavLink>
          </li>
          <li>
            <NavLink to="/hearts" activeClassName="activeNavButton">
              Hearts
            </NavLink>
          </li>
          <li>
            <NavLink to="/spades" activeClassName="activeNavButton">
              Spades
            </NavLink>
          </li>
          <li>
            <NavLink to="/yahtzee" activeClassName="activeNavButton">
              Yahtzee
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route exact path="/canadian_bacon" component={Canadian_Bacon} />
        <Route exact path="/canadian_salad" component={Canadian_Salad} />
        <Route exact path="/canasta" component={Canasta} />
        <Route exact path="/domino_train" component={Domino_Train} />
        <Route exact path="/farkle" component={Farkle} />
        <Route exact path="/twisted_farkle" component={Twisted_Farkle} />
        <Route exact path="/hearts" component={Hearts} />
        <Route exact path="/spades" component={Spades} />
        <Route exact path="/yahtzee" component={Yahtzee} />
      </div>
    );
  }
}

export default App;
