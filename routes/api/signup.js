const router = require("express").Router();
const passport = require("passport");
//const exaplecontroller = require("../../controllers/exaplecontroller");

// Matches with "/api/signup"
router.route("/")
    .post(passport.authenticate('signup'),
    (req,res) => {
        console.log(`User ${req.user.email} signed up`);
        let user = req.user.name
        res.send(user);
        
    }
    );


module.exports = router;
