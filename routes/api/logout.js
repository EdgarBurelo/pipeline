const router = require("express").Router();


// Matches with "/api/logout"
router.route("/")
    .post((req,res) => {
        console.log("log");
        req.logOut();
        res.send({status:"201"});
        
    });

module.exports = router;