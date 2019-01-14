const express = require("express");
const db = require("./models");
const routes = require("./routes");
const app = express();

let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

app.use(routes);

// app.get("/api",(req,res) => {
//     console.log("Resolved");
//     res.json([{ id: 1, name: "algo1" }, { id: 2, name: "algo2" }]);
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});