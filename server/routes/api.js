const express = require("express");
const router = express.Router();

const { addMember, addTeam } = require("../controllers/InstertController");
const validateMember = require("../middlewares/validateMember");
const validateTeam = require("../middlewares/validateTeam");
const { fetchMembers, fetchTeams } = require("../controllers/FetchController");
const {
  deleteTeams,
  deleteMembers,
} = require("../controllers/DeleteController");
const validateObjectId = require("../middlewares/validateObjectId");
const { updateMember } = require("../controllers/UpdateController");
const { validateUser, validateLogin } = require("../middlewares/validateUser");
const { signupUser, loginUser } = require("../controllers/AuthController");
const { AuthMiddleware } = require("../middlewares/Authorization");

// routes for insert
router.post("/create/member", AuthMiddleware, validateMember, addMember);
router.post("/create/team", AuthMiddleware, validateTeam, addTeam);

// routes for fetch
router.get("/fetch/members", fetchMembers);
router.get("/fetch/teams", fetchTeams);

// routes for delete
router.delete(
  "/delete/team/:id",
  AuthMiddleware,
  validateObjectId,
  deleteTeams
);
router.delete(
  "/delete/member/:id",
  AuthMiddleware,
  validateObjectId,
  deleteMembers
);

// routes for update
router.put(
  "/update/member/:id",
  AuthMiddleware,
  validateObjectId,
  validateMember,
  updateMember
);

// routes for authentication
router.post("/auth/signup", validateUser, signupUser);
router.post("/auth/login", validateLogin, loginUser);

module.exports = router;
