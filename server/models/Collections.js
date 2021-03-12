//==========================================
// REQUIRE
//==========================================
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//==========================================
// SET UP SCHEMA
//==========================================
const collectionScema = new Schema({
  title: {
    type: String,
    required: true,
  },
  cameras: [
    {
      type: Schema.Types.ObjectId,
      ref: "Camera",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

//==========================================
// SET UP MODEL
//==========================================
const Collection = mongoose.model("Collection", collectionScema);

// EXPORT
module.exports = Collection;
