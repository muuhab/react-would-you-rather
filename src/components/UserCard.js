import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class UserCard extends Component {
  render() {
      const{id,name,questions,answers}=this.props.user
    return (
      <Card className="text-center" key={id}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h3>Score: {questions.length+Object.keys(answers).length}</h3>
          <p>Answerd Questions {questions.length}</p>
          <p>Answerd Questions {Object.keys(answers).length}</p>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    );
  }
}

export default UserCard;
