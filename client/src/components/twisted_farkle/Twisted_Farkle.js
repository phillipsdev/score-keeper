import React, { Component } from "react";
import Modal from "../Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Twisted_Farkle extends Component {
  state = {
    modal: false
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div className="game-header">
        <h1>Twisted Farkle</h1>
        <FontAwesomeIcon
          icon="info-circle"
          className="info-icon"
          onClick={this.toggleModal}
        />
        <Modal
          game="twisted_farkle"
          isOpen={this.state.modal}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

export default Twisted_Farkle;
