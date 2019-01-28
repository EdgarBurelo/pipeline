const router = require("express").Router();
const passport = require("passport");
//const exaplecontroller = require("../../controllers/exaplecontroller");

// Matches with "/api/signup"
router.route("/")
    .post(passport.authenticate('signup'),
    (req,res) => {
        console.log(`User ${req.user.email} signed up`);
        //let user = req.user.name;
        let user = {};
        user.name = req.user.name;
        user.email = req.user.email;
        user.id = req.user.id;
        user.profile = req.user.profile;
        user.company = req.user.companyId;
        res.send(user);
        
    }
    );


module.exports = router;
