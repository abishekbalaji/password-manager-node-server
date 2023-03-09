const express = require("express");
const manageController = require("../controllers/manage");

const router = express.Router();

router.post("/add", manageController.addCreds);
router.get("/get/:title/:email/:user", manageController.getCreds);

module.exports = router;
