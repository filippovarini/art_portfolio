import React, { Component } from "react";

export class Project extends Component {
  redirect = e => {
    window.location = `${
      window.location.pathname
    }/${this.props.project.images.indexOf(e.target.src)}`;
  };

  render() {
    return (
      <div id="project">
        <p className="page-title">{this.props.project.title}</p>
        <p id="date">{this.props.project.date}</p>
        <p id="description">{this.props.project.description}</p>
        <div id="images-container">
          {this.props.project.images.map((image, i) => (
            <img
              src={image}
              key={i}
              className="project-image"
              onClick={this.redirect}
            ></img>
          ))}
        </div>
      </div>
    );
  }
}

export default Project;
