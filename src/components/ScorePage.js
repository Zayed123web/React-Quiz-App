import React, { Component } from "react";

export default class ScorePage extends Component {
  render() {
    const { totalScores } = this.props;
    return (
      <div className="question bg-white p-3 border-bottom">
        <div className="d-flex flex-row justify-content-between align-items-center mcq">
          <h4>Your Score is Quiz {totalScores}/10</h4>
        </div>
        <button
          className="btn btn-primary d-flex align-items-center btn-success"
          type="button"
        >
          Start Again
          <i className="fa fa-angle-right ml-2"></i>&nbsp;
        </button>
      </div>
    );
  }
}
