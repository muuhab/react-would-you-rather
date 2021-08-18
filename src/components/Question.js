import React, { Component } from "react";
import { Button, ButtonGroup, Card, ToggleButton } from "react-bootstrap";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";
import { capitalizeFirstLetter } from "../utilis/helpers";

export class Question extends Component {
  state = {
    radioValue: "",
    answerd: false,
  };
  handleSubmit = (question) => {
    const answer = this.state.radioValue;
    const { dispatch } = this.props;
    dispatch(handleSaveQuestionAnswer(answer, question.id));
    this.setState(() => ({
      answerd: true,
    }));
    this.props.history.push(`/answer/${question.id}`);
  };

  handleChange = (e) => {
    this.setState(() => ({
      radioValue: e.target.value,
    }));
  };

  render() {
    const { question } = this.props;
    return (
      <Card className="text-center" key={question.id}>
        <Card.Header>{capitalizeFirstLetter(question.author)} Asks</Card.Header>
        <Card.Body>
          <Card.Title>Would You Rather ...</Card.Title>
          <ButtonGroup toggle>
            <ToggleButton
              variant="success"
              key={1}
              type="radio"
              name="radio"
              value="optionOne"
              onChange={(e) => this.handleChange(e)}
            >
              {question.optionOne.text}
            </ToggleButton>
            <div></div>
            <ToggleButton
              key={2}
              type="radio"
              name="radio"
              value="optionTwo"
              onChange={(e) => this.handleChange(e)}
            >
              {question.optionTwo.text}
            </ToggleButton>
          </ButtonGroup>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button
            variant="dark"
            onClick={() => this.handleSubmit(question)}
            disabled={this.state.radioValue === "" ? true : false}
          >
            Submit
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}
  function mapStateToProps({questions },props) {
    const { id } = props.match.params
  
    return {
      question:questions[id]
    };
  }

export default connect(mapStateToProps)(Question)
