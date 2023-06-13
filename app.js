const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let items = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        // year: "numeric"

    };
    var day = today.toLocaleDateString("en-US", options);



    res.render("lists", { kindofday: day, newItem: items });

});
app.post("/", (req, res) => {
    var item = req.body.newItem;
    items.push(item);



    res.redirect("/");




});




app.listen(3000, (req, res) => {
    console.log("server started on 3000 port");
});