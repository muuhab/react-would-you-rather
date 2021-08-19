import React, { Component } from "react";
import { Button,Card,Col, Row} from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { capitalizeFirstLetter } from "../utilis/helpers";

export class PollCard extends Component {
  handleSubmit = (id,type) => {
    this.props.history.push(`/${type}/${id}`);
  };
  render() {
    const { question, button,type,avatar } = this.props;
    return (
      <Card className="text-center" key={question.id}>
        <Card.Header>{capitalizeFirstLetter(question.author)} Asks</Card.Header>
        <Row>
        <Col md={{span:3,offset:1}}>
        <Card.Img variant="top" src={avatar}   />
        </Col>
        <Col>
        <Card.Body>
          <Card.Title>Would You Rather ...</Card.Title>
          <h3>{question.optionOne.text}</h3>
          <h3>Or</h3>
          <h3>{question.optionTwo.text}</h3>
        </Card.Body>
        </Col>
        </Row>
        <Card.Footer className="text-muted">
          <Button variant="dark" onClick={() => this.handleSubmit(question.id,type)}>
            {button}
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}

export default withRouter(PollCard);
