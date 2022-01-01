const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db/MongoDB");

/* Routers */
const projectRouter = require("./routes/project");

const app = express();

/* Connect database */
db.connect();

app.use(bodyParser.json());
app.use("/api/project", projectRouter);

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
