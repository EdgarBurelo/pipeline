const router = require("express").Router();
const exaplecontroller = require("../../controllers/adminController");

// Matches with "/api/example"
router.route("/")
    .get(exaplecontroller.findAll)

module.exports = router;
