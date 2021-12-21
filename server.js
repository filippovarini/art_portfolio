const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const db_secret = require("./config/keys").MONGO_URI;

const app = express();

app.use(bodyParser.json());

// rendering static assets
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});