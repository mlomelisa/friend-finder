
var userData = require("../data/friends");

module.exports = function(app) {
    // Redirect to Tables API page
  app.get('/api/friends', function (req,res){
  res.json(userData);
  });

  app.post('/api/friends', function(req,res) {
    userData.push(req.body);
    res.json(true)
  })

}