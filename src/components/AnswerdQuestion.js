import React, { Component } from "react";
import { Button, Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { calculateVotes, capitalizeFirstLetter } from "../utilis/helpers";

export class AnswerdQuestion extends Component {
  render() {
    const { question,avatar,userAnswer } = this.props;
    if(typeof(question)==="undefined")
    return <Redirect to='/not-found'/>
    if(typeof(userAnswer)==="undefined")
      return <Redirect to='/'/>
    const { option1, option2, option1Number, option2Number, length } =
    calculateVotes(question.optionOne.votes, question.optionTwo.votes);
    
    question.option1 = option1;
    question.option2 = option2;
    question.option1Number = option1Number;
    question.option2Number = option2Number;
    question.length = length;
    return (
      <Container>
          <Col md={{span:8,offset:2}}>
      <Card className="text-center" key={question.id}>
          <Link to="/">
          <Button variant="danger" size="sm" className="back-btn">Go Back</Button>{' '}
          
          </Link>
        <Card.Header>
          Asked By {capitalizeFirstLetter(question.author)}

        </Card.Header>
        <Card.Body>
        <Row>
        <Col md={{span:3,offset:1}}>
        <Card.Img variant="top" src={avatar}   />
        </Col>
        <Col md={{offset:1}}>
        <Card.Title>Results ...</Card.Title>
        <div className={userAnswer==="optionOne"&&'highlight'}>
          <h5>{question.optionOne.text}</h5>
        </div>
          <ProgressBar now={question.option1} label={`${question.option1}%`} />
          <small>
            {question.option1Number} out of {question.length} votes
          </small>
          <div className={userAnswer==="optionTwo"&&'highlight'}>
          <h5>{question.optionTwo.text}</h5>
          </div>
          <ProgressBar now={question.option2} label={`${question.option2}%`} />
          <small>
            {question.option2Number} out of {question.length} votes
          </small>
          </Col>
          </Row>
        </Card.Body> 
      </Card>
      </Col>
      </Container>
    );
  }
}
function mapStateToProps({ questions,users,authedUser }, props) {
  const { id } = props.match.params;
  const question= questions[id]
  const userAnswer=users[authedUser].answers[id]
  return {
    question,
    avatar:question?users[questions[id].author].avatarURL:null,
    userAnswer,
  };
}

export default connect(mapStateToProps)(AnswerdQuestion);
