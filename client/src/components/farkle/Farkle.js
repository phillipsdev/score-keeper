import React, { Component } from "react";
import Modal from "../Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Farkle extends Component {
  state = {
    modal: false
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
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
    );
  }
}

export default Farkle;
