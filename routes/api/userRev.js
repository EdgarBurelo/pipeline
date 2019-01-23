const router = require("express").Router();

// Matches with "/api/userStatus"
router.route("/")
    .get((req, res) => {
        console.log("lof", req.user.name);
        let user = req.user.name
        res.send(user);
    });

module.exports = router;