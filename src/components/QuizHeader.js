import React, { Component } from "react";

export default class QuizHeader extends Component {
  render() {
    const { total, current } = this.props;
    return (
      <div className="question bg-white p-3 border-bottom">
        <div className="d-flex flex-row justify-content-between align-items-center mcq">
          <h4>MCQ Quiz</h4>
          {total && (
            <span>
              ({current + 1} of {total.length})
            </span>
          )}
        </div>
      </div>
    );
  }
}
