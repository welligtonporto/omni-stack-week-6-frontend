import React, { Component } from "react";
import api from "../../services/api";
import Logo from "../../components/Logo";
import "./styles.css";

export default class Main extends Component {
  state = {
    newBox: ""
  };

  handleSubmit = async event => {
    event.preventDefault();

    const response = await api.post("boxes", {
      title: this.state.newBox
    });

    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = event => {
    this.setState({
      newBox: event.target.value
    });
  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <Logo />
          <input
            placeholder="Create a box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}
