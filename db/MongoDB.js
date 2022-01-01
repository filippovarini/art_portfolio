const mongoose = require("mongoose");
const db_secret = require("../config/keys").MONGO_URI;

/* Models */
const Project = require("./models/project");

class MongoDB {
  connect = () => {
    mongoose
      .connect(db_secret, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        console.log("MongoDB connected...");
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  postProject = project => {
    const newProject = new Project(project);
    newProject
      .save()
      .then(() => true)
      .catch(error => {
        console.log(error);
        return false;
      });
  };
}

module.exports = new MongoDB();
