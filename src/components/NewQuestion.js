import React, { Component } from "react";
import {  Card, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleSaveQuestion } from "../actions/questions";

export class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };
  handleChange = (e) => {
      const value=e.target.value
      if(e.target.name==="optionOne")
    this.setState(() => ({
      optionOne: value,
    }))
    else
    this.setState(() => ({
        optionTwo: value,
      }));
  };
  handleSubmit = (e) => {
    const { dispatch } = this.props;
    const { optionOne, optionTwo } = this.state;
    dispatch(handleSaveQuestion(optionOne, optionTwo));
    <Redirect to="/"/>
  };
  render() {
      const {optionOne,optionTwo}=this.state
    return (
      <Container>
        <Col md={{ offset: 3, span: 6 }}>
          <Card className="text-center">
            <Card.Header>Create New Question</Card.Header>
            <Card.Body>
              <Card.Title>Would You Rather ...</Card.Title>
              <form className="new-tweet" onSubmit={this.handleSubmit}>
                <input
                  placeholder="What's happening?"
                  value={optionOne}
                  onChange={this.handleChange}
                  type='text'
                  name='optionOne'
                />
                <input
                  placeholder="What's happening?"
                  value={optionTwo}
                  onChange={this.handleChange}
                  type='text'
                  name='optionTwo'
                />
               
                <button className="btn2" type="submit" disabled={(optionOne === "" || optionTwo==="")?true:false}>
                  Submit
                </button>
              </form>
            </Card.Body>

            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </Col>
      </Container>
    );
  }
}

export default connect()(NewQuestion);
