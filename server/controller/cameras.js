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
// @ All Cameras || All Cameras by Collections using query
module.exports.getAllCameras = catchAsync(async (req, res) => {
  const { collectionId } = req.query;

  const cameras = await Camera.find({})
    .populate("user", "-password")
    .populate("_collection", "title");

  const camerasByCollection = await Camera.find({ _collection: collectionId })
    .populate("user", "-password")
    .populate("_collection", "title");

  if (collectionId) {
    res.send({ camerasByCollection });
    return;
  }

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

// @ POST
// @ Add camera to a category
module.exports.createCamera = catchAsync(async (req, res) => {
  const { collectionId } = req.params;
  const { title, imageUrl, year, filmType, description } = req.body;

  const collection = await Collection.findById(collectionId);
  const camera = await new Camera({
    title,
    imageUrl,
    year,
    filmType,
    _collection: collectionId,
    description,
    user: req.user._id,
  });

  await camera.save();
  collection.cameras.push(camera);
  await collection.save();

  res.send({ message: "successfully added new camera" });
});
