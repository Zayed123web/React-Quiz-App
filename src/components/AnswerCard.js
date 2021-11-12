import React, { Component } from "react";

export default class AnswerCard extends Component {
  selectAnswer = (ans) => {
    this.props.selectedAns(ans);
  };
  render() {
    const { ans } = this.props;
    return (
      <div
        onClick={() => {
          this.selectAnswer(ans);
        }}
        className="ans ml-2"
      >
        <label className="radio">
          <span>{ans}</span>
        </label>
      </div>
    );
  }
}
