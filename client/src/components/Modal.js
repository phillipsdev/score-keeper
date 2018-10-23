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

  // searchGames = () => {
  //   let toSearch = this.props.game;
  //   for (let i = 0; i < this.games.length; i++) {
  //     for (let key in this.games[i]) {
  //       console.log("first key test", key);
  //       if (key === toSearch) {
  //         console.log("key test", key);
  //         this.setState({ gameInfo: Object.values(this.games[i][key]) });
  //       }
  //     }
  //   }
  // };

  searchGames = gameSearch => {
    return gameSearch.name === this.props.game;
  };

  returnGame = () => {
    this.games.find(this.searchGames);
    return <div>{this.games.rules}</div>;
  };

  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <p>{this.props.game}</p>
          {console.log("this.props.game", this.props.game)}
          {console.log("gameInfo", this.games.find(this.searchGames))}
        </div>
      );
    } else return null;
  }
}

export default Modal;
