// const express = require("express");
// const app = express();
// const User = require("../../db/models/User.js");
// const accountController = require("../../controllers/api/users.js");
// const LocalStrategy = require("passport-local");
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const session = require("express-session");

// app.use(bodyParser.urlencoded({ extended: false }));

// require("../../middleware/auth.js")();

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// app.use(passport.initialize());

// // app.get("/", (req, res) => {
// //   res.send("Introduction JWT Auth");
// // });
// app.get(
//   "/profile",
//   passport.authenticate("jwt", { session: false }),
//   accountController.profile
// );
// app.post("/login", passport.authenticate("local"), accountController.login);
// app.post("/register", accountController.register);

// module.exports = app;
