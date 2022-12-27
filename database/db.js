const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

require("dotenv").config();

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect( process.env.MONGO_URI, {
      useNewUrlParser: true,
    } );
    console.log(`CONNECTED TO DB: ${conn.connection.host}`.bgYellow.black);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectToDb;
