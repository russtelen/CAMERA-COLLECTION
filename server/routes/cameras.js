// =============================================
// REQUIRE
// =============================================
const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  getAllCameras,
  getCameraById,
  createCamera,
  updateCamera,
  deleteCamera,
} = require("../controller/cameras");
const { requireLogin, isCameraAuthor } = require("../middlewares/middlewares");

// ==============================================
// ROUTES
// ==============================================
router.route("/").get(getAllCameras);
router
  .route("/:id")
  .get(getCameraById)
  .patch(requireLogin, isCameraAuthor, updateCamera)
  .delete(requireLogin, isCameraAuthor, deleteCamera);
router.route("/collections/:collectionId").post(requireLogin, createCamera);

module.exports = router;
