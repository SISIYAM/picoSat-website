const Member = require("../models/Member");
const Team = require("../models/Team");

// method for fetch members
const fetchMembers = async (req, res) => {
  try {
    const members = await Member.find();

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
    const teams = await Team.find();
    console.log(teams);
    if (!teams || teams.length === 0) {
      return res.status(404).json({ message: "No records found" });
    }
    res.status(200).json({
      message: "Teams fetch successfully",
      data: teams,
    });
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({
      message: "Failed to fetch teams",
      error: error.message,
    });
  }
};

// method for fetch individual teams data
const individualTeams = (req, res) => {};

module.exports = { fetchMembers, fetchTeams };
