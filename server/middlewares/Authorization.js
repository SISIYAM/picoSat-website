const jwt = require("jsonwebtoken");

const AuthMiddleware = (req, res, next) => {
  // get user from the jwt token
  const token = req.header("auth-token");

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized user" });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized user" });
  }
};

module.exports = { AuthMiddleware };
