const mongoose = require("mongoose");
require("dotenv").config();
mongoUrl = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

module.exports = connectToMongo;
