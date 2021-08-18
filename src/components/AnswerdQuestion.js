import React, { Component } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { connect } from "react-redux";
import { calculateVotes, capitalizeFirstLetter } from "../utilis/helpers";

export class AnswerdQuestion extends Component {
  render() {
    const { question } = this.props;
    const { option1, option2, option1Number, option2Number, length } =
    calculateVotes(question.optionOne.votes, question.optionTwo.votes);
    
    question.option1 = option1;
    question.option2 = option2;
    question.option1Number = option1Number;
    question.option2Number = option2Number;
    question.length = length;
    return (
      <Card className="text-center" key={question.id}>
        <Card.Header>
          Asked By {capitalizeFirstLetter(question.author)}
        </Card.Header>
        <Card.Title>Results ...</Card.Title>
        <Card.Body>
          <h5>{question.optionOne.text}</h5>
          <ProgressBar now={question.option1} label={`${question.option1}%`} />
          <small>
            {question.option1Number} out of {question.length} votes
          </small>
          <h5>{question.optionTwo.text}</h5>
          <ProgressBar now={question.option2} label={`${question.option2}%`} />
          <small>
            {question.option2Number} out of {question.length} votes
          </small>
        </Card.Body> 
      </Card>
    );
  }
}
function mapStateToProps({ questions }, props) {
  const { id } = props.match.params;

  return {
    question: questions[id],
  };
}

export default connect(mapStateToProps)(AnswerdQuestion);
