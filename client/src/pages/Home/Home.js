import React, { Component } from "react";
import "./Home.css";

import ProjectCover, {
  project_cover
} from "../../components/project_cover/project_cover";

export class Home extends Component {
  render() {
    return (
      <div className="App">
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
