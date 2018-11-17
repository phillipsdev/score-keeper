import React, { Component } from 'react';

class PlayerCard extends Component {
  handleSubmit = (event, player) => {
    event.preventDefault();

    this.props.calculateScore(this.props.roll);
  };
  render() {
    return (
      <div className="player_cards">
        <h3>Player {this.props.index + 1}</h3>
        <form className="score_input">
          <input
            type="text"
            name="roll"
            value={this.props.roll}
            onChange={this.props.handleChange}
            key={this.props.index}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <div>
          <p>Score: {this.props.score}</p>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
