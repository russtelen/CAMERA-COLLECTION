// =============================================
// REQUIRE
// =============================================
const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  getAllCameras,
  getCameraById,
  createCamera,
} = require("../controller/cameras");
const { requireLogin } = require("../middlewares/middlewares");

// ==============================================
// ROUTES
// ==============================================
router.route("/").get(getAllCameras);
router.route("/:id").get(getCameraById);
router.route("/:collectionId").post(requireLogin, createCamera);

module.exports = router;
