import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

export  class Login extends Component {
    state={
        select:"",
        choose:false,
    }
    handleChange = (e) => {
        this.setState(()=>({
            select:e,
            choose:true
        }))
        this.props.dispatch(setAuthedUser(e))
        
      };
  render() {

      const {users}=this.props
      const {from}=this.props.location.state || {from:{pathname:'/'}}
      
      if(this.state.choose)
      {return <Redirect to={from}/>}
      return (
        <div className="text-center">
        <Form.Group controlId="formBasicSelect">

          <Form.Label>Select User To Login</Form.Label>
          <Form.Control
            as="select"
            value={this.state.select}
            onChange={(e) => {
                this.handleChange(e.target.value);
            }}
            >
                <option  defaultValue>Select User</option>
              {users?Object.values(users).map((user)=>(
                  <option value={user.id} key={user.id}>{user.name}</option>
                  ))
                  :null}
          </Form.Control>
        </Form.Group>
      </div>
    );
  }
}

function mapStateToProps({users,authedUser}){
return {
    users,
    authedUser
}
}

export default withRouter(connect(mapStateToProps)(Login))