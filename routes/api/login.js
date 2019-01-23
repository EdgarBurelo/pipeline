const router = require("express").Router();
const exaplecontroller = require("../../controllers/exaplecontroller");

// Matches with "/api/login"
router.route("/")
    .post((req,res,next) => {
        console.log("endpoingHIT");
        res.json("A");
    });

module.exports = router;
