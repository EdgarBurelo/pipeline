const router = require("express").Router();

// Matches with "/api/userStatus"
router.route("/")
    .get((req, res) => {
        console.log("lof1", req.session.passport);
        let alreadyLogged = req.session.passport;
        if(alreadyLogged) {
            let user = {};
            user.name = req.user.name;
            user.email = req.user.email;
            user.id = req.user.id;
            user.profile = req.user.profile;
            user.company = req.user.companyId;
            res.send(user);
        }
        else {
            res.send({user:false});
        }
    });

module.exports = router;