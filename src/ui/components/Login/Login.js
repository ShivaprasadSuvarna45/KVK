import React, { Component } from "react";
import Dashboard from '../Dashboard/Dashboard'
import {Redirect} from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '',password:'',isLoggedin:false};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({username: event.target.value});
  }

   handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.username);
    this.setState({isLoggedin:true})
    event.preventDefault();
  }

  render() {
    if(!this.state.isLoggedin){
    return (
    <div className="container loginFormContainer">
  <form onSubmit={this.handleSubmit}>
    <div className="form-group row">
      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">UserName</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id="inputEmail3" value={this.state.username}placeholder="Name" onChange={this.handleNameChange}/>
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
      <div className="col-sm-10">
        <input type="password" className="form-control" id="inputPassword3" value={this.state.password} placeholder="Password" onChange={this.handlePasswordChange}/>
      </div>
    </div>
    <div className="form-group row">
      <div className="offset-sm-2 col-sm-10">
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </div>
  </form>
</div>
    );
  }else{
    console.log("inside else")
    return <Redirect to='/Dashboard' />
  }
}
}