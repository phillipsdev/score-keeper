import React, { Component } from "react";
import Modal from "../Modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Canadian_Salad extends Component {
  state = {
    modal: false
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div className="game-header">
        <h1>Canadian Salad</h1>
        <FontAwesomeIcon
          icon="info-circle"
          className="info-icon"
          onClick={this.toggleModal}
        />
        <Modal
          game="canadian_salad"
          isOpen={this.state.modal}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

export default Canadian_Salad;
