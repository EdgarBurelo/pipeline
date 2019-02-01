const express = require("express");
const db = require("./models");
const routes = require("./routes");
const app = express();
const session = require('express-session');
const passport = require("passport");


let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: "cats", 
    resave: false, //required
    saveUninitialized: false //required
 }));
 


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("client/build"));

let initPassport = require('./passport/init');
initPassport(passport);

// app.use((req, res, next) => {
//     console.log('req.session', req.session);
//     return next();
// });

app.use(routes);

// app.get("/api",(req,res) => {
//     console.log("Resolved");
//     res.json([{ id: 1, name: "algo1" }, { id: 2, name: "algo2" }]);
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});