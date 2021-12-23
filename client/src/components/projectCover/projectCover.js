import React, { Component } from "react";
import "./projectCover.css";

export class project_cover extends Component {
  redirect = () => {
    window.location = `/project/${this.props.project.id}`;
  };

  render() {
    return (
      <div id="project-cover-box" className="box" onClick={this.redirect}>
        <div
          id="project-cover-image"
          style={{ backgroundImage: `url(${this.props.project.images[0]})` }}
        ></div>
        <div id="project-info">
          <p id="project-cover-title">{this.props.project.title}</p>
          <p id="project-cover-date">{this.props.project.date}</p>
        </div>
      </div>
    );
  }
}

export default project_cover;
