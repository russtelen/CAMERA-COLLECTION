// ==========
// REQUIRE
// ==========
const mongoose = require("mongoose");

// Connect Mongoose
let localDb = process.env.localDb;
let atlasDb = process.env.db;

module.exports.connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/camera-collection", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log("MONGO CONNECTED");
  } catch (e) {
    console.log("MONGO CONNECTION ERROR :(");
    console.log(e);
  }
};
