import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { getData } from "../actions/shared";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import Login from "./Login";
import AppNav from "./AppNav";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import Question from "./Question";
import AnswerdQuestion from "./AnswerdQuestion";
import NotFound from './NotFound'
import LoadingBar from "react-redux-loading";

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(getData());
  }
  render() {
    return (
      <div className="container">
        {this.props.loading === true ? null : (
          <React.Fragment>
            <AppNav loggedOut={this.props.loggedOut} />
            <React.Fragment>
                <LoadingBar/>
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
                  path="/add"
                  Component={NewQuestion}
                  authedUser={!this.props.loggedOut}
                />
                <ProtectedRoute
                  exact
                  path="/leaderboard"
                  Component={LeaderBoard}
                  authedUser={!this.props.loggedOut}
                />
                <Route path="/not-found" component={NotFound} />
                <Redirect to='/not-found'/>
              </Switch>
            </React.Fragment>
          </React.Fragment>
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
