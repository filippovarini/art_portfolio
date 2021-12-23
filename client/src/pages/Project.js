import React, { Component } from "react";
import ProjectImage from "../components/projectImage/projectImage";

export class Project extends Component {
  state = {
    imageIndex: 0,
    imageZoomed: false
  };

  toggleImageZoomed = () => {
    this.setState({ imageZoomed: !this.state.imageZoomed });
  };

  redirect = e => {
    const index = this.props.project.images.indexOf(e.target.src);
    this.setState({ imageIndex: index });
    this.toggleImageZoomed();
  };

  prevImage = () => {
    if (this.state.imageIndex === 0) {
      throw new Error("Prev image out of bound");
    } else {
      this.setState({ imageIndex: this.state.imageIndex - 1 });
    }
  };

  nextImage = () => {
    if (this.state.imageIndex === this.props.project.images - 1) {
      throw new Error("Next image out of bound");
    } else {
      this.setState({ imageIndex: this.state.imageIndex + 1 });
    }
  };

  render() {
    const imageZoomed = this.state.imageZoomed ? (
      <ProjectImage
        images={this.props.project.images}
        index={this.state.imageIndex}
        nextImage={this.nextImage}
        prevImage={this.prevImage}
        hide={this.toggleImageZoomed}
      />
    ) : null;

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
              alt="project"
              className="project-image"
              onClick={this.redirect}
            ></img>
          ))}
        </div>
        {imageZoomed}
      </div>
    );
  }
}

export default Project;
