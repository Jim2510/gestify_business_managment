const User = require("../../db/models/User.js");
const config = require("../../config.js");
const jwt = require("jwt-simple");

exports.login =  function (req, res) {
   User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      console.log("Error");
    } else {
      const payload = {
        id: user.id,
        expire: Date.now() + 1000 * 60 * 60 * 24 * 7,
      };

      const token = jwt.encode(payload, config.jwtSecret);

      res.json({ token: token });
    }
  });
};

exports.register = function (req, res) {
  User.register(
    new User({
      username: req.body.username,
    }),
    req.body.password,
    function (err, msg) {
      if (err) {
        res.send(err);
      } else {
        res.send({ message: "Successful" });
      }
    }
  );
};

exports.profile = function (req, res) {
  res.json({
    message: "You made it to the secured profile",
    user: req.user,
    token: req.query.secret_token,
  });
};
