var friends = require("../data/friends.js");
var path = require("path");

var newFriend={};
var bestMatch={};
var difference=0;
var number=0;
// console.log(friends);

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		req.json(bestie(res.body, friends));
		// newFriend = req.body
		console.log(newFriend)
		// res.json(bestie(newFriend, friends));
		res.json(newFriend)
	});
	app.post("/api/friends", function(req, res){
		console.log("working?19", req.body)
		var compare = compares(newFriend, friends)
		var newFriend = friends
		newFriend.score = compareScore(newFriend);
		compare = compares(newFriend, friends)
	});
};
function bestie(finder, assign){
	for(var i=0; i<assign.length; i++){
		difference=0;
		for(var j=0; j<assign[i]['score[i]'].length; j++){
			difference=difference+Math.abs(finder['score[]'][j]- assign[i]['score[]'][j]);
       }
        if (i===0) {
            bestMatch=assign[i];
            number=difference;
        }
        else if(difference<number){
            bestMatch=assign[i];
            number=difference;
        }
    }

    return(bestMatch);
}
function compares(findingfriends, people){
	var closestNumber;
	var newBestie;
};
function compareScore(findingfriends){

}