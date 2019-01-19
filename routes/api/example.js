const router = require("express").Router();
const exaplecontroller = require("../../controllers/exaplecontroller");

// Matches with "/api/example"
router.route("/:id")
    .get(exaplecontroller.findAll)


module.exports = router;
