import React, { Component } from "react";
import QuizHeader from "./components/QuizHeader";
import QuizQuestion from "./components/QuizQuestion";
import ScorePage from "./components/ScorePage";
import StartQuizBtn from "./components/StartQuizBtn";
import { shuffle } from "./uties";

export default class QuizApp extends Component {
  state = {
    startQuiz: false,
    quizes: [],
    finalScore: 0,
    totalScores: 0,
    currentQuestion: 0,
    currentAnswers: [],
    endGame: false,
    correctAns: "",
    selectedAns: "",
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
      correctAns: results[0].correct_answer,
    });

    // console.log(this.state.quizes);
  };

  navigateNextHandler = () => {
    // this.setState({
    //   currentQuestion: this.state.currentQuestion + 1,
    // });
    const isLastQus =
      this.state.currentQuestion === this.state.quizes.length - 1;
    if (!isLastQus) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        currentAnswers: shuffle(
          prevState.quizes[prevState.currentQuestion + 1]
        ),
        correctAns:
          prevState.quizes[prevState.currentQuestion + 1].correct_answer,
      }));
    } else {
      this.setState({
        endGame: true,
      });
    }
  };

  navigatePrevHandler = () => {
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion - 1,
      currentAnswers: shuffle(prevState.quizes[prevState.currentQuestion - 1]),
      correctAns:
        prevState.quizes[prevState.currentQuestion - 1].correct_answer,
    }));
  };

  selectAnswer = (select) => {
    const { totalScores } = this.state;
    const isCorrect = select === this.state.correctAns;
    console.log(isCorrect);
    this.setState({
      selectedAns: select,
      totalScores: isCorrect ? totalScores + 1 : totalScores,
    });
    console.log(totalScores);
    // if (isCorrect) {
    //   this.setState({
    //     totalScore: totalScores + 20,
    //   });
    //   console.log(this.state.totalScores);
    // }
    // console.log(this.state.selectedAns);
  };

  render() {
    const {
      quizes,
      currentQuestion,
      currentAnswers,
      endGame,
      startQuiz,
      totalScores,
    } = this.state;
    return (
      <>
        <div className="container mt-5">
          <div className="d-flex justify-content-center row">
            <div className="col-md-10 col-lg-10">
              <div className="border">
                <QuizHeader total={quizes} current={currentQuestion} />
                {endGame && <ScorePage totalScores={totalScores} />}

                {!startQuiz && <StartQuizBtn data={this.startBtnHandler} />}
                {startQuiz && !endGame && (
                  <QuizQuestion
                    selectedAns={this.selectAnswer}
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
