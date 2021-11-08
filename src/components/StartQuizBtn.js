import React, { Component } from "react";

export default class StartQuizBtn extends Component {
  render() {
    return (
      <button
        onClick={this.props.data}
        className="btn btn-lg d-flex text-center btn-success mx-auto my-5 p-2"
      >
        Start Quiz
      </button>
    );
  }
}
