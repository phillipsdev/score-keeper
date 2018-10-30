import React, { Component } from "react";
import Modal from "../Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Farkle extends Component {
  state = {
    modal: false,
    value: ""
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
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
        <div className="player_count_form">
          <h3>How many players?</h3>
          <form>
            <select>
              <option value="1">1</option>
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
      </div>
    );
  }
}

export default Farkle;
