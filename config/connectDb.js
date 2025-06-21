const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.bgCyan.white);
  } catch (error) {
    console.error(`Error: ${error.message}`.bgRed.white);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDb;
