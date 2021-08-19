import React, { Component } from "react";
import { Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { UserCard } from "./UserCard";

export class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    return (
      <Container>
        <Col md={{ offset: 3, span: 6 }}>
          {users !== null && users.map((user) => <UserCard user={user} key={user.id} />)}
        </Col>
      </Container>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users: Object.values(users).sort(
      (a, b) =>
        (b.questions.length +
        Object.keys(b.answers).length) -
        (a.questions.length +
        Object.keys(a.answers).length),
    ),
  };
}
export default connect(mapStateToProps)(LeaderBoard);
