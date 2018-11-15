import React, { Component } from 'react';

class PlayerCard extends Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.calculateScore(this.props.roll);
  };
  render() {
    return (
      <div className="player_cards">
        <h3>Player Name</h3>
        <form>
          <input
            type="text"
            name="roll"
            value={this.props.roll}
            onChange={this.props.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PlayerCard;
