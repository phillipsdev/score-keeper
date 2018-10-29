import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <ul className="navbar">
            <li onClick={this.props.onClick}>Close</li>
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
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Menu;
