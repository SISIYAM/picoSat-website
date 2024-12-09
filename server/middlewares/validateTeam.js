const { body, validationResult } = require("express-validator");

const validateTeam = [
  body("teamName").notEmpty().withMessage("Team name is required."),
  body("email").isEmail().withMessage("Invalid email format.").normalizeEmail(),
  body("description")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description should not exceed 500 characters."),
  body("image").optional().isURL().withMessage("Invalid image URL."),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateTeam;
