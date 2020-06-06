var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use('/css', express.static(__dirname+'/node_modules/bootstrap/dist/css'));


app.get("/", function(req,res){
    res.render("main");
});

app.get("/menu", function(req,res){
    res.render("menu");
});

app.get("*", function(req, res){
    res.render("404");
});



app.listen(3000, function(){
    console.log("Working, yay");});