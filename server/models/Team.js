const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

teamSchema.virtual("members", {
  ref: "Member",
  localField: "_id", // local field in team
  foreignField: "team", // foreign field in member
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
