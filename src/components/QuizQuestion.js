import React, { Component } from "react";
import AnswerCard from "./AnswerCard";
// import Button from "./Button";

export default class QuizQuestion extends Component {
  navigateNext = () => {
    this.props.next();
  };

  navigatePrev = () => {
    this.props.prev();
  };

  render() {
    const { quiz, ans, selectedAns } = this.props;
    // console.log(quiz, ans, next);
    return (
      <>
        <div className="question bg-white p-3 border-bottom">
          <div className="d-flex flex-row align-items-center question-title">
            <h3 className="text-danger">Q.</h3>
            <h5 className="mt-1 ml-2">{quiz?.question}</h5>
          </div>
          {ans.map((ans, index) => (
            <AnswerCard selectedAns={selectedAns} key={index} ans={ans} />
          ))}
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
          <button
            onClick={this.navigatePrev}
            className="btn btn-primary d-flex align-items-center btn-danger"
            type="button"
          >
            <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp; Previous
          </button>
          {/* <Button
            size="primary"
            color="danger"
            text="Previous"
            icon="fa fa-angle-left mt-1 mr-1"
          /> */}
          {/* <Button
            onClick={() => {
              console.log("Hello World");
            }}
            size="primary"
            color="success"
            text="Next"
            icon="fa fa-angle-right ml-2"
          /> */}
          <button
            onClick={this.navigateNext}
            className="btn btn-primary d-flex align-items-center btn-success"
            type="button"
          >
            Next
            <i className="fa fa-angle-right ml-2"></i>&nbsp;
          </button>
        </div>
      </>
    );
  }
}
