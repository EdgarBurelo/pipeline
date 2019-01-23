const router = require("express").Router();


// Matches with "/api/logout"
router.route("/")
    .post((req,res) => {
        req.logOut();
        res.json({status:"ok"});
    });

module.exports = router;