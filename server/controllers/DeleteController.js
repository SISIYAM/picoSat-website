const Member = require("../models/Member");
const Team = require("../models/Team");

// method for delete members
const deleteTeams = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTeam = await Team.findByIdAndDelete(id);

    if (!deletedTeam) {
      return res.status(404).json({
        message: "Team not found",
      });
    }

    res.status(200).json({
      message: "Team deleted successfully",
      data: deletedTeam,
    });
  } catch (error) {
    console.error("Error deleting team:", error);

    res.status(500).json({
      message: "Failed to delete team",
      error: error.message,
    });
  }
};

// method for delete members
const deleteMembers = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteMember = await Member.findByIdAndDelete(id);

    if (!deleteMember) {
      return res.status(404).json({
        message: "Member not found!",
      });
    }

    res.status(200).json({
      message: "Members deleted successfully",
      data: deleteMember,
    });
  } catch (error) {
    console.error("Error deleting team:", error);

    res.status(500).json({
      message: "Failed to delete team",
      error: error.message,
    });
  }
};

// method for delete team ejs
const deleteTeamEjs = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTeam = await Team.findByIdAndDelete(id);

    if (!deletedTeam) {
      req.flash("error", "Team not found!");
      return res.redirect("/teams");
    }

    req.flash("success", "Team deleted successfully");
    return res.redirect("/teams");
  } catch (error) {
    console.error("Error deleting team:", error);

    req.flash("error", "Faild to delete team");
    return res.redirect("/teams");
  }
};

module.exports = { deleteTeams, deleteMembers, deleteTeamEjs };
