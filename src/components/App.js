import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getData } from "../actions/shared";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import Login from "./Login";
import AppNav from "./AppNav";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import Question from "./Question";
import AnswerdQuestion from "./AnswerdQuestion";

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(getData());
  }
  render() {
    return (
      <div className="container">
        {this.props.loading === true ? null : (
          <div>
            <AppNav loggedOut={this.props.loggedOut} />
            <div>
              <Switch>
                <Route path='/login' component={Login}/>
                <ProtectedRoute
                  exact
                  path="/"
                  Component={Home}
                  authedUser={!this.props.loggedOut}
                />
                <ProtectedRoute
                  exact
                  path="/unasnwerd/:id"
                  Component={Question}
                  authedUser={!this.props.loggedOut}
                />
                <ProtectedRoute
                  exact
                  path="/answer/:id"
                  Component={AnswerdQuestion}
                  authedUser={!this.props.loggedOut}
                />
                <ProtectedRoute
                  exact
                  path="/new-question"
                  Component={NewQuestion}
                  authedUser={!this.props.loggedOut}
                />
                <ProtectedRoute
                  exact
                  path="/leaderboard"
                  Component={LeaderBoard}
                  authedUser={!this.props.loggedOut}
                />
                {/* <Route exact path="*" Component={NotFound} /> */}
              </Switch>
            </div>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    loggedOut: authedUser === "Logout",
  };
}
export default connect(mapStateToProps)(App);
