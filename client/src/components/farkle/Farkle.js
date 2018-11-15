import React, { Component } from 'react';
import Modal from '../Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlayerCard from '../PlayerCard';

class Farkle extends Component {
  state = {
    modal: false,
    cards: false,
    value: '2',
    roll: '0',
    previousScore: '0'
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  toggleCards = () => {
    this.setState({ cards: !this.state.cards });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.toggleCards();
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  showPlayerCards = () => {
    let value = parseInt(this.state.value);
    let rows = [];
    for (let i = 0; i < value; i++) {
      rows.push(
        <PlayerCard
          key={i}
          handleChange={this.handleChange}
          roll={this.state.roll}
          calculateScore={this.calculateScore}
        />
      );
    }
    return rows;
  };

  calculateScore = roll => {
    const newScore = parseInt(this.state.previousScore) + parseInt(roll);
    console.log('new score', newScore);
    this.setState({ previousScore: newScore });
    return newScore;
  };

  render() {
    return (
      <div>
        <div className="game-header">
          <h1>Farkle</h1>
          <FontAwesomeIcon
            icon="info-circle"
            className="info-icon"
            onClick={this.toggleModal}
          />
          <Modal
            game="farkle"
            isOpen={this.state.modal}
            toggleModal={this.toggleModal}
          />
        </div>
        {!this.state.cards ? (
          <div className="player_count_form">
            <h3>How many players?</h3>
            <form>
              <select
                name="value"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button onClick={this.handleSubmit}>Go!</button>
            </form>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleCards}>Back</button>
            <div className="show_cards">{this.showPlayerCards()}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Farkle;
