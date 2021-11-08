import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        className={`btn btn-${this.props.size} d-flex align-items-center btn-${this.props.color}`}
        type="button"
      >
        <i className={this.props.icon}></i>&nbsp;{this.props.text}
      </button>
    );
  }
}
