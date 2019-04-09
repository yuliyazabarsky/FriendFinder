// this route  is used to dispaly a JSON of all possible friends. 

var friends = require ("../data/friends");

module.exports = function (app){

    app.get("/api/friends", function(req,res){
        res.json(friends);
    });    


// this route is used to handle incoming survey results and handle the compatability logic

app.post("/api/friends", function (req, res){
    var userInput = req.body;
    console.log(req.body);

    var userScore = userInput.scores;
    var bestMatch = {
        name: "",
        photo:"",
        diff: 100
    }
    var totalDiff = 0;
    for (var i=0; i<friends.length; i++){
        var currFriend = friends[i];
        totalDiff =0;
    for (var j = 0; j < userScore.length; j++){
        var currentScore = currFriend.score;
        totalDiff += Math.abs(parseInt(currentScore)- parseInt(userScore));
    }

    if(totalDiff < bestMatch.diff){
        bestMatch.name = currFriend.name;
        bestMatch.photo = currFriend.photo;
        bestMatch.diff=totalDiff;
    }
    }
    friends.push(req.body);
    res.json(bestMatch);
})
}




