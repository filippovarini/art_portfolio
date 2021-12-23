import React, { Component } from "react";
import "./pages.css";

import ProjectCover from "../components/projectCover/projectCover";

export class Home extends Component {
  render() {
    return (
      <div>
        <div id="projects">
          {this.props.projects.map((project, i) => (
            <ProjectCover project={project} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
