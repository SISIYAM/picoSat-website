const Member = require("../models/Member");
const Team = require("../models/Team");

// method for serach content based on key and id
const laodContent = async (req, res) => {
  // destruct id and key
  const { id, key } = req.body;
  let findContent;
  try {
    if (key == "teams") {
      findContent = await Team.findById(id);
    } else if (key == "members") {
      findContent = await Member.findById(id);
    }
    res.status(200).json({
      status: 200,
      key,
      findContent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: "Unknown error occurd!",
    });
  }
};

module.exports = {
  laodContent,
};
