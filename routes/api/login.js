const router = require("express").Router();
const
const exaplecontroller = require("../../controllers/exaplecontroller");

// Matches with "/api/login"
router.route("/")
    .post((req,res,next) => {
        console.log("endpoingHIT");
        next();
    },
        passport.authenticate('login')
    )


module.exports = router;
