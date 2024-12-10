const Member = require("../models/Member");
const Team = require("../models/Team");

// method for add members
const addMember = async (req, res) => {
  try {
    const { name, email, mobile, team, image } = req.body;

    const newMember = new Member({ name, email, mobile, team, image });

    const savedMember = await newMember.save();

    res.status(201).json({
      message: "Document inserted successfully",
      data: savedMember,
    });
  } catch (error) {
    console.error("Error inserting document:", error);

    res.status(500).json({
      message: "Failed to insert document",
      error: error.message,
    });
  }
};

// method for insert team
const addTeam = async (req, res) => {
  try {
    const { teamName, email, description, image } = req.body;

    const newTeam = new Team({
      teamName,
      email,
      description,
      image,
    });

    const savedTeam = await newTeam.save();

    res.status(201).json({
      message: "Team inserted successfully",
      data: savedTeam,
    });
  } catch (error) {
    console.error("Error inserting team:", error);

    res.status(500).json({
      message: "Failed to insert team",
      error: error.message,
    });
  }
};

// method for insert team using ejs
const insertTeamEjs = async (req, res) => {
  try {
    const { teamName, email, description, image } = req.body;

    const newTeam = new Team({
      teamName,
      email,
      description,
      image,
    });

    await newTeam.save();

    req.flash("success", "Team Created successfully");
    return res.redirect("/teams");
  } catch (error) {
    console.error("Error inserting team:", error);

    req.flash("error", error.message);
    return res.redirect("/teams");
  }
};

// method for add members ejs
const insertMemberEjs = async (req, res) => {
  try {
    const {
      name,
      email,
      department,
      session,
      linkedin,
      orcid,
      team,
      role,
      image,
    } = req.body;

    const newMember = new Member({
      name,
      email,
      department,
      session,
      linkedin,
      orcid,
      team,
      role,
      image,
    });

    await newMember.save();

    req.flash("success", "Member Created successfully");
    return res.redirect("/members");
  } catch (error) {
    console.error("Error inserting document:", error);

    req.flash("success", "Failed to Created!");
    return res.redirect("/members");
  }
};

module.exports = { addMember, addTeam, insertTeamEjs, insertMemberEjs };
