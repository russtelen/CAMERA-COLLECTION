// =============================================
// REQUIRE
// =============================================
const express = require("express");
const router = express.Router({ mergeParams: true });
const { getAllCameras } = require("../controller/cameras");

// ==============================================
// ROUTES
// ==============================================
router.route("/").get(getAllCameras);

module.exports = router;
