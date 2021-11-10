import React, { Component } from "react";
import Button from "./Button";

export default class QuizTrigger extends Component {
  navigateNext = () => {
    this.props.next();
    console.log("Next");
  };
  render() {
    // const { next } = this.props;
    console.log(this.props.next);
    return (
      <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
        <Button
          size="primary"
          color="danger"
          text="Previous"
          icon="fa fa-angle-left mt-1 mr-1"
        />
        <Button
          onClick={this.navigateNext}
          size="primary"
          color="success"
          text="Next"
          icon="fa fa-angle-right ml-2"
        />
      </div>
    );
  }
}
