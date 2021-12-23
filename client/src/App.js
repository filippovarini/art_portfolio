import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Bio from "./pages/Bio";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";

const projects = [
  {
    id: "1",
    title: "Test project",
    description:
      "Sunt pariatur quis labore nisi deserunt. Dolor excepteur laborum fugiat proident irure. Ad non eu Lorem fugiat aute. Commodo proident do do dolor occaecat qui nisi. Ipsum est enim cupidatat pariatur laboris. Sint ad sint pariatur occaecat id tempor duis commodo mollit. Ex esse et commodo exercitation ut eu do fugiat incididunt laborum dolor.",
    date: "15/12/2021",
    images: [
      "https://i.picsum.photos/id/684/200/300.jpg?hmac=nn1tmB9fSTQO4MaL20HOedMOv4HNILJxIjPvOPhuxbE",
      "https://i.picsum.photos/id/703/200/200.jpg?hmac=6zWxIBRmIf2e0jZTqvKBIwrc7wm-dPkvGky4go6Yyvg",
      "https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk",
      "https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk",
      "https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk"
    ]
  },
  {
    id: "2",
    title: "Test project",
    description:
      "Sunt pariatur quis labore nisi deserunt. Dolor excepteur laborum fugiat proident irure. Ad non eu Lorem fugiat aute. Commodo proident do do dolor occaecat qui nisi. Ipsum est enim cupidatat pariatur laboris. Sint ad sint pariatur occaecat id tempor duis commodo mollit. Ex esse et commodo exercitation ut eu do fugiat incididunt laborum dolor.",
    date: "15/12/2021",
    images: [
      "https://i.picsum.photos/id/684/200/300.jpg?hmac=nn1tmB9fSTQO4MaL20HOedMOv4HNILJxIjPvOPhuxbE",
      "https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk",
      "https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk",
      "https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk"
    ]
  },
  {
    id: "3",
    title: "Test project",
    description:
      "Sunt pariatur quis labore nisi deserunt. Dolor excepteur laborum fugiat proident irure. Ad non eu Lorem fugiat aute. Commodo proident do do dolor occaecat qui nisi. Ipsum est enim cupidatat pariatur laboris. Sint ad sint pariatur occaecat id tempor duis commodo mollit. Ex esse et commodo exercitation ut eu do fugiat incididunt laborum dolor.",
    date: "15/12/2021",
    images: [
      "https://i.picsum.photos/id/684/200/300.jpg?hmac=nn1tmB9fSTQO4MaL20HOedMOv4HNILJxIjPvOPhuxbE",
      "https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk",
      "https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk",
      "https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk"
    ]
  },
  {
    id: "4",
    title: "Test project",
    description:
      "Sunt pariatur quis labore nisi deserunt. Dolor excepteur laborum fugiat proident irure. Ad non eu Lorem fugiat aute. Commodo proident do do dolor occaecat qui nisi. Ipsum est enim cupidatat pariatur laboris. Sint ad sint pariatur occaecat id tempor duis commodo mollit. Ex esse et commodo exercitation ut eu do fugiat incididunt laborum dolor.",
    date: "15/12/2021",
    images: [
      "https://i.picsum.photos/id/684/200/300.jpg?hmac=nn1tmB9fSTQO4MaL20HOedMOv4HNILJxIjPvOPhuxbE",
      "https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk",
      "https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk",
      "https://i.picsum.photos/id/367/200/300.jpg?hmac=9v6fvZlygxFPleXOePw645QmRd9ytp91VGVQaolJKIk"
    ]
  }
];

export class App extends Component {
  getProject(id) {
    return projects[0];
  }

  getComponent() {
    const path = window.location.pathname;
    const params = path.split("/").filter(param => param != "");

    let component = <NotFound />;

    if (params.length == 0) {
      component = <Home projects={projects} />;
    } else if (params.length > 0) {
      switch (params[0]) {
        case "bio":
          component = <Bio />;
          break;
        case "contact":
          component = <Contacts />;
          break;
        case "project":
          if (params[1]) {
            const project = this.getProject(params[1]);
            component = <Project project={project} />;
          }
          break;
      }
    }

    return component;
  }

  render() {
    const component = this.getComponent();

    return (
      <div className="App">
        <Header />
        <div id="page-wrapper">{component}</div>
      </div>
    );
  }
}

export default App;
