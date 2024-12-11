const mongoose = require("mongoose");
const slugify = require("slugify");

const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
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
  localField: "_id", // Local field in team
  foreignField: "team", // Foreign field in member
});

// middleware to automatically generate slug before saving
teamSchema.pre("save", function (next) {
  if (this.isModified("teamName")) {
    this.slug = slugify(this.teamName, {
      lower: true,
      strict: true,
    });
  }
  next();
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
