const express = require("express");
const {
  loadLoginForm,
  loadDashboard,
  loadTeams,
  laodMembers,
} = require("../controllers/AdminDashboardController");
const {
  authenticateToken,
  checkAuthenticated,
} = require("../middlewares/checkLoginMiddleware");
const { validateEjsLogin } = require("../middlewares/validateUser");
const { loginEjsUser, logoutUser } = require("../controllers/AuthController");
const { laodContent } = require("../controllers/AjaxController");
const {
  updateTeamsEjs,
  updateMembersEjs,
} = require("../controllers/UpdateController");
const { insertTeamEjs } = require("../controllers/InstertController");
const { deleteTeamEjs } = require("../controllers/DeleteController");
const router = express.Router();

// route for load login form
router.get("/", (req, res) => {
  return res.redirect("/dashboard");
});
router.get("/login", checkAuthenticated, loadLoginForm);

// route for load dashboard
router.get("/dashboard", authenticateToken, loadDashboard);

// route for authentication
router.post("/login", checkAuthenticated, validateEjsLogin, loginEjsUser);
router.get("/logout", logoutUser);

// route for load teams table
router.get("/teams", authenticateToken, loadTeams);

// route for load members table
router.get("/members", authenticateToken, laodMembers);

// route for update teams and members
router.post("/update/teams/:id", authenticateToken, updateTeamsEjs);
router.post("/update/members/:id", authenticateToken, updateMembersEjs);

// route for insert teams and members
router.post("/insert/team", authenticateToken, insertTeamEjs);

// route for delete
router.get("/delete/team/:id", authenticateToken, deleteTeamEjs);

// route for load form content according to key and id
router.post("/find/content", authenticateToken, laodContent);

module.exports = router;
