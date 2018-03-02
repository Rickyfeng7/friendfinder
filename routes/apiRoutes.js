var friends = require("../data/friends.js");
var path = require("path");

var newFriend={};
var bestMatch={};
var number=0;
var assign=0;
// console.log(friends);

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		// req.json(bestie(req.body, friends));
		newFriend = req.body
		console.log(newFriend)
		res.json(bestie(newFriend, friends));
	});
	app.post("/api/friends", function(req, res){
		res.json(friends)
		// console.log(res.body)
	});
};
function bestie(finder, assign){
	for(var i=0; i<friends.lengthl; i++){
		difference=0;
		for(var j=0; j<friends[i]['score[]'].length; j++){
			difference=difference+Math.abs(finder['score[]'][j]- assign[i]['score[]'][j]);
       }
        if (i===0) {
            bestMatch=asign[i];
            number=counter;
        }
        else if(counter<number){
            bestMatch=asign[i];
            number=counter;
        }
    }

    return(bestMatch);
}
