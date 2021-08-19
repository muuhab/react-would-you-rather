import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
  ToggleButton,
} from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleSaveQuestionAnswer } from "../actions/users";
import { capitalizeFirstLetter } from "../utilis/helpers";

export class Question extends Component {
  state = {
    radioValue: "",
  };
  handleSubmit = (question) => {
    const answer = this.state.radioValue;
    const { dispatch } = this.props;
    dispatch(handleSaveQuestionAnswer(answer, question.id));
    this.props.history.push(`/answer/${question.id}`);
  };

  handleChange = (e) => {
    this.setState(() => ({
      radioValue: e.target.value,
    }));
  };

  render() {
    const { question,avatar } = this.props;
    if (typeof question === "undefined") return <Redirect to="/not-found" />;
    return (
      <Container>
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="text-center" key={question.id}>
            <Card.Header>
              {capitalizeFirstLetter(question.author)} Asks
            </Card.Header>
            <Card.Body>
            <Row>
        <Col md={{span:2,offset:1}}>
        <Card.Img variant="top" src={avatar}   />
        </Col>
        <Col>
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
              </Col>
              </Row>
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
        </Col>
      </Container>
    );
  }
}
function mapStateToProps({ questions,authedUser,users }, props) {
  const { id } = props.match.params;

  return {
    question: questions[id],
    avatar:questions[id]?users[questions[id].author].avatarURL:null
  };
}

export default connect(mapStateToProps)(Question);
