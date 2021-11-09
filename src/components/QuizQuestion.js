import React, { Component } from "react";
import AnswerCard from "./AnswerCard";

export default class QuizQuestion extends Component {
  render() {
    const { quiz, ans } = this.props;
    console.log(quiz, ans);
    return (
      <div className="question bg-white p-3 border-bottom">
        <div className="d-flex flex-row align-items-center question-title">
          <h3 className="text-danger">Q.</h3>
          <h5 className="mt-1 ml-2">{quiz?.question}</h5>
        </div>
        {ans.map((ans, index) => (
          <AnswerCard key={index} ans={ans} />
        ))}
      </div>
    );
  }
}
