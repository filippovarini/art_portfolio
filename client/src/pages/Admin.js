import React, { Component } from "react";
import AdminAuth from "../components/adminAuth/adminAuth";
import Loading from "../components/loading/loading";

export class Admin extends Component {
  state = {
    loading: true,
    isAuth: false
  };

  componentDidMount = () => {
    this.isAuth()
      .then(res => this.setState({ isAuth: res, loading: false }))
      .catch(e => console.log(e));
  };

  isAuth = async () => {
    return false;
  };

  render() {
    let body = this.state.isAuth ? null : <AdminAuth />;
    return (
      <div>
        <div className="page-title">Admin Portal</div>
        {this.state.loading ? <Loading /> : body}
      </div>
    );
  }
}

export default Admin;
