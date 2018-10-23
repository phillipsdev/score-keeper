import React, { Component } from "react";

class Modal extends Component {
  state = {
    gameInfo: ""
  };

  games = [
    {
      name: "spades",
      rules: "Spades rules"
    },
    {
      name: "canasta",
      rules: "Canasta rules"
    },
    {
      name: "canadian_bacon",
      rules: "Canadian bacon rules"
    },
    {
      name: "hearts",
      rules: "Hearts rules"
    },
    {
      name: "domino_train",
      rules: "Domino train rules"
    },
    {
      name: "farkle",
      rules: "Farkle rules"
    },
    {
      name: "twisted_farkle",
      rules: "Twisted Farkle rules"
    },
    {
      name: "yahtzee",
      rules: "Yahtzee rules"
    }
  ];

  searchGames = gameSearch => {
    return gameSearch.name === this.props.game;
  };

  returnGame = () => {
    const found = this.games.find(this.searchGames);
    return found.rules;
  };

  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <p>{this.props.game}</p>
          <div>{this.returnGame()}</div>
        </div>
      );
    } else return null;
  }
}

export default Modal;
