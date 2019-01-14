const router = require("express").Router();
const exaplecontroller = require("../../controllers/exaplecontroller");

// Matches with "/api/books"
router.route("/")
    .get(exaplecontroller.findAll)


module.exports = router;
