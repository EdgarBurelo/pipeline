const router = require("express").Router();
const passport = require("passport");

// Matches with "/api/login"
router.route("/")
    .post(passport.authenticate("login"),
    (req,res) => {
        //console.log("lof",req.user.name);
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
