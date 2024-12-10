const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Team = require("../models/Team");
const Member = require("../models/Member");
const JWT_SECRET = process.env.JWT_SECRET;

const loadLoginForm = (req, res) => {
  res.render("login", {
    success: true,
    message: "",
  });
};

const loadDashboard = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.user.id);

    if (!user) {
      return res.redirect("/login");
    }
    const isLoggedIn = req.cookies.isLoggedIn === "true";
    res.render("dashboard", { username: user.username, isLoggedIn });
  } catch (error) {
    console.error("Error loading dashboard:", error);
    return res.redirect("/login");
  }
};

// method for load teams
const loadTeams = async (req, res) => {
  try {
    const isLoggedIn = req.cookies.isLoggedIn === "true";

    const teams = await Team.find({});

    res.render("teams", { teams, isLoggedIn, message: req.flash() });
  } catch (error) {
    console.error("Error loading teams:", error);
    res.render("teams", {
      error,
      message:
        "Failed to load teams. Please try again later, check console for more",
    });
  }
};

// method for load members
const laodMembers = async (req, res) => {
  try {
    const isLoggedIn = req.cookies.isLoggedIn === "true";

    // fetch teams
    const members = await Member.find({}).populate("team");
    const teams = await Team.find({});
    console.log(members);
    res.render("members", { members, teams, isLoggedIn, message: req.flash() });
  } catch (error) {
    console.error("Error loading members:", error);
    res.render("members", {
      error,
      message:
        "Failed to load members. Please try again later, check console for more",
    });
  }
};

module.exports = { loadLoginForm, loadDashboard, loadTeams, laodMembers };
