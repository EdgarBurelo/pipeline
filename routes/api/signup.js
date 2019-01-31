const router = require("express").Router();
const passport = require("passport");
//const exaplecontroller = require("../../controllers/exaplecontroller");

// Matches with "/api/signup"
router.route("/").post((req,res,next) => {
    passport.authenticate('signup',(err,user,info) => {
        if (err) { return next(err); }
        if (!user) { return res.send({ "ans": false }); }
        if (user) {
            req.logIn(user, (err) => {
                if (err) { return next(err); }
                let userinfo = {};
                userinfo.name = user.name;
                userinfo.email = user.email;
                userinfo.company = user.companyId;
                userinfo.id = user.id;
                userinfo.profile = user.profile;
                return res.send({ "user": userinfo, "ans": true });
            });
        }
    })(req,res,next);
})
    // .post(passport.authenticate('signup'),
    // (req,res) => {
    //     console.log(`User ${req.user.email} signed up`);
    //     //let user = req.user.name;
    //     let user = {};
    //     user.name = req.user.name;
    //     user.email = req.user.email;
    //     user.id = req.user.id;
    //     user.profile = req.user.profile;
    //     user.company = req.user.companyId;
    //     res.send(user);
        
    // }
    // );


module.exports = router;
