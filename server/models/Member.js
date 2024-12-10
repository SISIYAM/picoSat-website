const mongoose = require("mongoose");

const membersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
  },
  session: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  orcid: {
    type: String,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team", // reference to the Team model
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Member = mongoose.model("Member", membersSchema);

module.exports = Member;
