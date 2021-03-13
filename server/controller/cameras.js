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
  const cameras = await Camera.find({})
    .populate("user", "-password")
    .populate("_collection", "title");
  res.send({ cameras });
});

// @ GET
// @ Camera by id
module.exports.getCameraById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const camera = await Camera.findById(id)
    .populate("user", "-password")
    .populate("_collection", "title");

  res.send({ camera });
});
