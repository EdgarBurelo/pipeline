const router = require("express").Router();
const passport = require("passport");
//const exaplecontroller = require("../../controllers/exaplecontroller");

// Matches with "/api/signup"
router.route("/")
    .post((req, res, next) => {
        console.log("endpoingHITm");
        console.log(req.body);
        next();
    }
    ,
    passport.authenticate('signup'),
    (req,res) => {
        console.log(`User ${req.user.email} signed up`);
        res.json(
            {
                status: 'ok',
                user: {
                    email: req.user.email
                }
            });
    }
    );


module.exports = router;
