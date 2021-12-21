import React, { Component } from "react";
import text from "../../static/text.json";
import "./header.css";

export class header extends Component {
  render() {
    return (
      <div id="header">
        <div id="header-wrapper">
          <p id="logo">{text.logo}</p>
          <div id="nav">
            <a href="/" className="header-nav">
              {text.projectsNavigator}
            </a>
            <a href="/bio" className="header-nav">
              {text.bioNavigator}
            </a>
            <a href="/contact" className="header-nav">
              {text.contactNavigator}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default header;
