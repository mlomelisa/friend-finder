
var userData = require("../data/friends");

module.exports = function(app) {
    // Redirect to Tables API page
  app.get('/api/friends', function (req,res){
  res.json(userData);
  });

  app.post('/api/friends', function(req,res) {
   
    
    var totalDifferenceArray = []

    for (let i=0; i < userData.length; i++){
      var totalDifference = 0;
      console.log(i + '    --------------')
      for (let j=0; j < 10; j++) {
        totalDifference = difference(userData[i].scores[j], parseInt(req.body.scores[j])) + totalDifference
        console.log(userData[i].scores[j] + ' ' + parseInt(req.body.scores[j]))
        
        // console.log(userData[i].scores[j])
        // console.log(parseInt(req.body.scores[j]))
        console.log(j + '-------------------------------/n')
      }
      totalDifferenceArray.push(totalDifference)
    }
    console.log(totalDifferenceArray)
    var minimum = Array.min(totalDifferenceArray);

    var match = totalDifferenceArray.indexOf(minimum);
    res.json(userData[match])

    userData.push(req.body);
  })

}
//Function to get difference between two elements
var difference = function(a,b) {
  return Math.abs(a - b);
}

//Function to get the minimum value of an array
Array.min = function(array){
  return Math.min.apply(Math, array);
};

