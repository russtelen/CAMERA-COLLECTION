// =============================================
// REQUIRE
// =============================================
const Collection = require("../models/Collections");
const Camera = require("../models/Cameras");
const catchAsync = require("../utils/catchAsync");

// =============================================
// Logic
// =============================================
// @ GET
// @ All Cameras
module.exports.getAllCameras = catchAsync(async (req, res) => {
  const cameras = await Camera.find({}).populate("user", "-password");
  res.send({ cameras });
});
