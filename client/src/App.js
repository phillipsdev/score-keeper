import React, { Component } from "react";
import { Route } from "react-router-dom";

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
import Menu from "./components/Menu";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faInfoCircle);

class App extends Component {
  state = {
    menu: false
  };

  showMenu = () => {
    this.setState({ menu: !this.state.menu });
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <Menu onClick={this.showMenu} isOpen={this.state.menu} />
          {!this.state.menu ? (
            <div className="menu-item" onClick={this.showMenu}>
              Menu
            </div>
          ) : null}
        </header>
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
