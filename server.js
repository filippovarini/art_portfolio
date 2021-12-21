const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

/* Connect. */
const db_secret = require("./config/keys").MONGO_URI;
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
