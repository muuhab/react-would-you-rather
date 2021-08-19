import React, { Component } from "react";
import { Navbar, NavbarBrand, Button, Nav, NavItem } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

export class AppNav extends Component {
  handleLogout = () => {
    const { dispatch, loggedOut } = this.props;
    dispatch(setAuthedUser("Logout"));
    if (loggedOut === true) {
      <Redirect to="/" />;
    }
  };
  render() {
    return (
      <React.Fragment>
        <Navbar  expand="md">
          <div className="container">
            <Nav navbar>
              <NavItem>
                <NavLink to="/" className="nav-link">
                  <span className="fa fa-list fa-lg"></span>Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/add" className="nav-link">
                  <span className="fa fa-home fa-lg"></span>New Question
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/leaderboard" className="nav-link">
                  <span className="fa fa-info fa-lg"></span>Leader Board
                </NavLink>
              </NavItem>
            </Nav>
            {this.props.loggedOut ? null : (
              <React.Fragment>
                <Nav navbar className="m-auto">
                  <NavbarBrand>
                    <img src={this.props.user.avatarURL} className="card-img" alt="user"/>
                    {this.props.user.name}
                  </NavbarBrand>
                </Nav>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Button onClick={this.handleLogout}>
                      Logout
                    </Button>
                  </NavItem>
                </Nav>
              </React.Fragment>
            )}
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    user:users[authedUser]
  };
}
export default connect(mapStateToProps)(AppNav);
