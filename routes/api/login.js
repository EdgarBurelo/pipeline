const router = require("express").Router();
const passport = require("passport");

// Matches with "/api/login"
router.route("/")
    .post(passport.authenticate("login"),
    (req,res) => {
        console.log("lof",req.user.name);
        let user = req.user.name
        res.send(user);
    }
    );


module.exports = router;
