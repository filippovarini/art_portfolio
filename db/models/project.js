const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  images: {
    /* images[0] is cover. The user chooses cover and sort array accordingly. */
    type: [String],
    required: true
  }
});

module.exports = Project = mongoose.model("Projects", ProjectSchema);
