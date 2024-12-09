const Member = require("../models/Member");
const Team = require("../models/Team");

// method for update member
const updateMember = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;

    const updatedMember = await Member.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedMember) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.status(200).json({
      message: "Member updated successfully",
      data: updatedMember,
    });
  } catch (error) {
    console.error("Error deleting member:", error);

    res.status(500).json({
      message: "Failed to delete member",
      error: error.message,
    });
  }
};

// method for update teams
const updateTeam = async (req, res) => {
  try {
    // get id from params
    const { id } = req.params;

    const updatedTeam = await Team.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTeam) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.status(200).json({
      message: "Team updated successfully",
      data: updatedTeam,
    });
  } catch (error) {
    console.error("Error deleting team:", error);

    res.status(500).json({
      message: "Failed to delete team",
      error: error.message,
    });
  }
};

// method for update temas using ejs
const updateTeamsEjs = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedTeam = await Team.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedTeam) {
      req.flash("error", "Team Not found!");
      return res.redirect("/teams");
    }
    req.flash("success", "Team updated successfully");
    return res.redirect("/teams");
  } catch (error) {
    console.log(error);
  }
};

// method for update memberes using ejs
const updateMembersEjs = async (req, res) => {
  try {
    const id = req.params.id;

    const updateMember = await Member.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updateMember) {
      req.flash("error", "Member Not found!");
      return res.redirect("/members");
    }
    req.flash("success", "Member updated successfully");
    return res.redirect("/members");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updateMember,
  updateTeam,
  updateTeamsEjs,
  updateMembersEjs,
};
