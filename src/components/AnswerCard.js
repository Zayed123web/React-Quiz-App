import React, { Component } from "react";

export default class AnswerCard extends Component {
  render() {
    const { ans } = this.props;
    return (
      <div className="ans ml-2">
        <label className="radio">
          {" "}
          <input type="radio" name="brazil" value="brazil" /> <span>{ans}</span>
        </label>
      </div>
    );
  }
}
