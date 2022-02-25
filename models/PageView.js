const mongoose = require("mongoose");

const pageView = new mongoose.Schema({
  path: { type: String },
  date: { type: Date },
  userAgent: { type: String },
});

module.exports = mongoose.model("pageView", pageView);
