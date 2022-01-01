import React, { Component } from "react";
import "./adminAuth.css";

export class AdminAuth extends Component {
  state = {
    psw: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert(this.state.psw);
  };

  render() {
    return (
      <div id="admin-login">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="psw" id="psw-label">
            Insert the admin password
          </label>
          <input
            id="psw"
            placeholder="password"
            type="password"
            onChange={this.handleChange}
            className="text-input"
          />
          <input type="submit" className="hidden" />
        </form>
      </div>
    );
  }
}

export default AdminAuth;
