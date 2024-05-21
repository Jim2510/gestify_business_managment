const express = require("express");
const app = express();
const User = require("../../db/models/User.js");
const accountController = require("../../controllers/api/users.js");
const LocalStrategy = require("passport-local");
const bodyParser = require("body-parser");
const passport = require("passport");
const session=require('express-session');
const mongoose = require("mongoose");
const db = mongoose.connection;
const MongoStore = require('connect-mongo')
const {DB_URL}=process.env
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("../../middleware/auth.js")();
app.use(session({
    secret: 'your secret key',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongoUrl: DB_URL})
  }));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());


// app.get("/", (req, res) => {
//   res.send("Introduction JWT Auth");
// });
// app.get(
//   "/profile",
//   passport.authenticate("jwt", { session: false }),
//   accountController.profile
// );
// app.post("/login", passport.authenticate("local"), accountController.login);
// app.post("/register", accountController.register)
app.post('/register', function (req, res) {
    User.register(
      new User({ 
        username: req.body.username 
      }), req.body.password, function (err, msg) {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successful" });
        }
      }
    )
  })
app.post('/login', passport.authenticate('local', { 
    failureRedirect: '/login-failure', 
    successRedirect: '/login-success'
  }), (err, req, res, next) => {
    if (err) next(err);
  });
  
  app.get('/login-failure', (req, res, next) => {
    console.log(req.session);
    res.send('Login Attempt Failed.');
  });
  
  app.get('/login-success', (req, res, next) => {
    console.log(req.session);
    res.send('Login Attempt was successful.');
  });
  app.get('/profile', function(req, res) {
    console.log(req.session)
    if (req.isAuthenticated()) {
      res.json({ message: 'You made it to the secured profie' })
    } else {
      res.json({ message: 'You are not authenticated' })
    }
  })
  

module.exports = app;
