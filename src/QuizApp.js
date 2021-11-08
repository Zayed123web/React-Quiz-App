import React, { Component } from "react";
import QuizHeader from "./components/QuizHeader";
import QuizQuestion from "./components/QuizQuestion";
import QuizTrigger from "./components/QuizTrigger";
import StartQuizBtn from "./components/StartQuizBtn";

const initState = {
  startQuiz: false,
  quizes: [],
};

export default class QuizApp extends Component {
  state = {
    initState,
  };

  startBtnHandler = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    );
    const { results } = await res.json();

    this.setState({
      startQuiz: true,
      quizes: results,
    });

    console.log(this.state.quizes);
  };

  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="d-flex justify-content-center row">
            <div className="col-md-10 col-lg-10">
              <div className="border">
                <QuizHeader />
                {console.log(this.state.startQuiz)}
                {!this.state.startQuiz ? (
                  <StartQuizBtn data={this.startBtnHandler} />
                ) : (
                  <QuizQuestion />
                )}
                <QuizTrigger />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
