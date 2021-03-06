var db = require("../models");

module.exports = function(app) {
  // Load index page

  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.render("index");
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
