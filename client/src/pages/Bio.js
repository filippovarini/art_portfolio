import React, { Component } from "react";
import text from "../static/text.json";
import "./pages.css";

export class Bio extends Component {
  render() {
    return (
      <div id="bio">
        <p id="bio-title">{text.bioTitle}</p>
        <p className="bio-paragraph">{text.bioP1}</p>
        <p className="bio-paragraph">{text.bioP2}</p>
        <p className="bio-paragraph">{text.bioP3}</p>
        <p className="bio-paragraph">{text.bioP4}</p>
        <p className="bio-paragraph">{text.bioP5}</p>
        <p className="bio-paragraph">{text.bioP6}</p>
        <p className="bio-paragraph">{text.bioP7}</p>
        <p className="bio-paragraph">{text.bioP8}</p>
        <p className="bio-paragraph">{text.bioP9}</p>
        <p className="bio-paragraph">{text.bioP10}</p>
      </div>
    );
  }
}

export default Bio;
