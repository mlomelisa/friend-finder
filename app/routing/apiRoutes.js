var path = require("path");

module.exports = function(app) {
    // Redirect to Tables API page
  app.get('/api/friends', function (req,res){
  res.sendFile(path.join(__dirname,'../data/friends.js'));
  });

}