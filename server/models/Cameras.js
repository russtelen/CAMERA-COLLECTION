//==========================================
// REQUIRE
//==========================================
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//==========================================
// SET UP SCHEMA
//==========================================
const cameraSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  filmType: {
    type: String,
    enum: ["120", "35mm", "Digital", "Polaroid"],
  },
  description: {
    type: String,
    required: true,
  },
  _collection: {
    type: Schema.Types.ObjectId,
    ref: "Collection",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

//==========================================
// SET UP MODEL
//==========================================
const Camera = mongoose.model("Camera", cameraSchema);

// EXPORT
module.exports = Camera;
