import React, { Component } from "react";
import text from "../static/text.json";

export class contacts extends Component {
  render() {
    return (
      <div>
        <p className="page-title">{text.contactTitle}</p>
        hello world
      </div>
    );
  }
}

export default contacts;
