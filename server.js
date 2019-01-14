const path = require("path");
const express = require("express");
//const routes = require("./routes");
const app = express();
const router = require("express").Router();

let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

app.get("/api",(req,res) => {
    console.log("Resolved");
    res.json([{ id: 1, name: "algo1" }, { id: 2, name: "algo2" }]);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
// });