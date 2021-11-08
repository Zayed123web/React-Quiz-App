import React, { Component } from "react";

export default class QuizQuestion extends Component {
  render() {
    return (
      <div className="question bg-white p-3 border-bottom">
        <div className="d-flex flex-row align-items-center question-title">
          <h3 className="text-danger">Q.</h3>
          <h5 className="mt-1 ml-2">
            Which of the following country has largest population?
          </h5>
        </div>
        <div className="ans ml-2">
          <label className="radio">
            {" "}
            <input type="radio" name="brazil" value="brazil" />{" "}
            <span>Brazil</span>
          </label>
        </div>
        <div className="ans ml-2">
          <label className="radio">
            {" "}
            <input type="radio" name="Germany" value="Germany" />{" "}
            <span>Germany</span>
          </label>
        </div>
        <div className="ans ml-2">
          <label className="radio">
            {" "}
            <input type="radio" name="Indonesia" value="Indonesia" />{" "}
            <span>Indonesia</span>
          </label>
        </div>
        <div className="ans ml-2">
          <label className="radio">
            {" "}
            <input type="radio" name="Russia" value="Russia" />{" "}
            <span>Russia</span>
          </label>
        </div>
      </div>
    );
  }
}
