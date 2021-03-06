const mongoose = require("mongoose");
const dotenv = require("dotenv");
require('dotenv').config();

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(process.env.PROD_MONGODB, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
