const { body, validationResult } = require("express-validator");

const validateMember = [
  body("name").notEmpty().withMessage("Name is required."),
  body("email").isEmail().withMessage("Invalid email format.").normalizeEmail(),
  body("mobile")
    .matches(/^\d{10,15}$/)
    .withMessage("Invalid mobile number."),
  body("team").notEmpty().withMessage("Team is required."),
  body("image").optional().isURL().withMessage("Invalid image URL."),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateMember;
