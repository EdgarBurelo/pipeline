const router = require("express").Router();
const passport = require("passport");

// Matches with "/api/login"
router.route("/").post((req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
        //console.log(user);
        if (err) { return next(err); }
        if (!user) { return res.send({"ans":false}); }
        if (user) {
            req.logIn(user, (err) => {
                if(err) {return next(err);}
                let userinfo={};
                userinfo.name = user.name;
                userinfo.email = user.email;
                userinfo.company = user.companyId;
                userinfo.id = user.id;
                userinfo.profile = user.profile;
                return res.send({ "user": userinfo, "ans": true });
            });
            
        } 
    })(req, res, next);
});


module.exports = router;
