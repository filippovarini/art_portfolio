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

  getHash = async psw => {
    const hash = await fetch(`/user/hash?psw=${psw}`);
    return hash;
  };

  handleSubmit = async e => {
    e.preventDefault();
    let hash = "";
    try {
      hash = await this.getHash(this.state.psw);
    } catch (e) {
      console.log(e);
      alert("Internal server error. Retry!");
    }
    sessionStorage.setItem("auth", hash);
    window.location = window.location.pathname;
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
