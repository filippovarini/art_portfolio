import React, { Component } from "react";
import "./projectImage.css";

export class projectImage extends Component {
  getLeftArrowStyle = () => {
    return this.props.index == 0 ? { visibility: "hidden" } : null;
  };

  getRightArrowStyle = () => {
    return this.props.images.length == this.props.index + 1
      ? { visibility: "hidden" }
      : null;
  };

  render() {
    return (
      <div id="background-wrapper">
        <i
          id="image-close"
          onClick={this.props.hide}
          className="fas fa-times"
        ></i>
        <div id="image-wrapper">
          <i
            onClick={this.props.prevImage}
            style={this.getLeftArrowStyle()}
            className="fas fa-angle-left image-scroller"
          ></i>
          <img
            src={this.props.images[this.props.index]}
            alt="project image"
            id="zoomed-image"
          />
          <i
            onClick={this.props.nextImage}
            style={this.getRightArrowStyle()}
            className="fas fa-angle-right image-scroller"
          ></i>
        </div>
      </div>
    );
  }
}

export default projectImage;
