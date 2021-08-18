import React, { Component } from "react";
import { Tabs,Tab } from "react-bootstrap";
import { connect } from "react-redux";
import PollCard from "./PollCard";

export class Home extends Component {
    state={
        key:"unasnwerd"
    }
    handleTab=(k)=>{
        this.setState(()=>({
            key:k
        }))
    }

  render() {
    const { answerd, unAnswerd } = this.props;
    const {key}=this.state
    return (
      <div className="text-center">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => this.handleTab(k)}
          className="mb-3"
        >
          <Tab eventKey="unasnwerd" title="Unasnwerd">
              {answerd?answerd.map((question)=>
              <PollCard question={question} button={"Answer Poll"} key={question.id} type="unasnwerd" />
              ):null}
          </Tab>
          <Tab eventKey="answerd" title="Answerd">
          {unAnswerd?unAnswerd.map((question)=>
              <PollCard question={question} button={"Results"} key={question.id} type="answer" />
              ):null}
          </Tab>
        </Tabs>
      </div>
    );
  }
}
function mapStateToProps({ authedUser, users, questions }) {
  const user = users[authedUser];
  const answers = Object.keys(user.answers);
  return {
    answerd: Object.values(questions)
      .filter((question) => !answers.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp),
    unAnswerd: Object.values(questions)
      .filter((question) => answers.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp),
  };
}

export default connect(mapStateToProps)(Home);
