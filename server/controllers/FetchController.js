const Member = require("../models/Member");
const Team = require("../models/Team");
const { ObjectId } = require("mongodb");

// method for fetch members
const fetchMembers = async (req, res) => {
  try {
    const members = await Member.find().populate("team");

    if (!members || members.length === 0) {
      return res.status(404).json({ message: "No records found" });
    }

    return res.status(200).json({
      message: "Members fetched successfully",
      data: members,
    });
  } catch (error) {
    console.error("Error fetching members:", error);

    res.status(500).json({
      message: "Failed to fetch members",
      error: error.message,
    });
  }
};

// methods for fetch teams
const fetchTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate("members");

    if (!teams || teams.length === 0) {
      return res.status(404).json({ message: "No teams found" });
    }

    res.status(200).json({
      message: "Teams and their members fetched successfully",
      data: teams,
    });
  } catch (error) {
    console.error("Error fetching teams with members:", error);
    res.status(500).json({
      message: "Failed to fetch teams with members",
      error: error.message,
    });
  }
};

// method for fetch individual teams data
const individualTeams = async (req, res) => {
  const { id } = req.params;

  try {
    // validate if `id` is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid team ID" });
    }

    // find team members based on team ID
    const members = await Member.find({ team: new ObjectId(id) });

    res.status(200).json({
      success: true,
      data: members,
    });
  } catch (error) {
    console.error("Error fetching teams with members:", error);
    res.status(500).json({
      message: "Failed to fetch teams with members",
      error: error.message,
    });
  }
};

module.exports = { fetchMembers, fetchTeams, individualTeams };
