import React, { Component } from "react";
import { Card, Col,Row } from "react-bootstrap";

export class UserCard extends Component {
  render() {
      const{id,name,questions,answers,avatarURL}=this.props.user
    return (
      <Card className="text-center" key={id}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Row>
        <Col md={{span:3,offset:1}}>
        <Card.Img variant="top" src={avatarURL}  />
        </Col>
        <Col>
          <h3>Score: {questions.length+Object.keys(answers).length}</h3>
          <p>Created Questions {questions.length}</p>
          <p>Answerd Questions {Object.keys(answers).length}</p>
        </Col>
        </Row>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    );
  }
}

export default UserCard;
