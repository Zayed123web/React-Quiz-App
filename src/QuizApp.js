import React, { Component } from "react";
import QuizHeader from "./components/QuizHeader";
import QuizQuestion from "./components/QuizQuestion";
import StartQuizBtn from "./components/StartQuizBtn";
import { shuffle } from "./uties";

const initState = {
  startQuiz: false,
  quizes: [],
  currentQuestion: 0,
  currentAnswers: [],
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
    // console.log(shuffle(results[0]));
    this.setState({
      startQuiz: true,
      quizes: results,
      currentQuestion: 0,
      currentAnswers: shuffle(results[0]),
    });

    // console.log(this.state.quizes);
  };

  navigateNextHandler = () => {
    // this.setState({
    //   currentQuestion: this.state.currentQuestion + 1,
    // });
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1,
      currentAnswers: shuffle(prevState.quizes[prevState.currentQuestion + 1]),
    }));
  };

  navigatePrevHandler = () => {
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion - 1,
      currentAnswers: shuffle(prevState.quizes[prevState.currentQuestion - 1]),
    }));
  };

  render() {
    const { quizes, currentQuestion, currentAnswers } = this.state;
    return (
      <>
        <div className="container mt-5">
          <div className="d-flex justify-content-center row">
            <div className="col-md-10 col-lg-10">
              <div className="border">
                <QuizHeader total={quizes} current={currentQuestion} />
                {!this.state.startQuiz ? (
                  <StartQuizBtn data={this.startBtnHandler} />
                ) : (
                  <QuizQuestion
                    prev={this.navigatePrevHandler}
                    next={this.navigateNextHandler}
                    ans={currentAnswers}
                    quiz={quizes[currentQuestion]}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
