// ==========
// REQUIRE
// ==========
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// Read .env file
dotenv.config()

// Connect Mongoose
let localDb = process.env.localDb
let atlasDb = process.env.db

module.exports.connectDb = async () => {
  try {
    await mongoose.connect(localDb, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })

    console.log("MONGO CONNECTED")
  } catch (e) {
    console.log("MONGO CONNECTION ERROR :(")
    console.log(e)
  }
}
