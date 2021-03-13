// =============================================
// REQUIRE
// =============================================
const express = require("express");
const router = express.Router({ mergeParams: true });
const { getAllCameras, getCameraById } = require("../controller/cameras");

// ==============================================
// ROUTES
// ==============================================
router.route("/").get(getAllCameras);
router.route("/:id").get(getCameraById);

module.exports = router;
