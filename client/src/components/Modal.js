import React, { Component } from "react";

class Modal extends Component {
  state = {
    gameInfo: ""
  };

  games = [
    {
      name: "canadian_bacon",
      rules: "Canadian Bacon rules"
    },
    {
      name: "canadian_salad",
      rules: "Canadian Salad rules"
    },
    {
      name: "canasta",
      rules: "Canasta rules"
    },
    {
      name: "domino_train",
      rules: "Domino Train rules"
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
      name: "hearts",
      rules: "Hearts rules"
    },
    {
      name: "spades",
      rules: "Spades rules"
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
    const game_name = this.props.game.replace(/[_]/g, " ");

    if (this.props.isOpen) {
      return (
        <div className="modal-rules">
          <span className="exit" onClick={this.props.toggleModal}>
            &times;
          </span>
          <p>{game_name.toUpperCase()}</p>
          <div>{this.returnGame()}</div>
        </div>
      );
    } else return null;
  }
}

export default Modal;
