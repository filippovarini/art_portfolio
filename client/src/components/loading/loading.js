import React, { Component } from "react";
import "./loading.css";

/** @param class type of color */
export class Loading extends Component {
  render() {
    return (
      <div id="loading-box">
        <p id="loading-header">thinking...</p>
        <div id="loading-container">
          <div className="loadingio-spinner-eclipse-hbomlyl697i">
            <div className="ldio-351dmw22jn2">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
