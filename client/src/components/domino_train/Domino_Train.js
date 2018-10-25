import React, { Component } from "react";
import Modal from "../Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Domino_Train extends Component {
  state = {
    modal: false
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div className="game-header">
        <h1>Domino Train</h1>
        <FontAwesomeIcon
          icon="info-circle"
          className="info-icon"
          onClick={this.toggleModal}
        />
        <Modal
          game="domino_train"
          isOpen={this.state.modal}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

export default Domino_Train;
