var friends = require("../data/friends.js");

var newFriend={};
var bestMatch={};
var difference=0;
var number=0;
// console.log(friends);

module.exports = function(app){
	app.post("/api/friends", function(req, res){
		// console.log("working?12", req.body)
		newFriend=req.body;
		// console.log("14", req.body)
		// console.log("14"+newFriend);
		res.json(bestie(newFriend, friends))
	});
	app.get("/api/friends", function(req, res) {
		res.json(tableData);
	});

	app.post("/api/tables", function(req, res) {

		console.log(res.body);
	});

};
function bestie(finder, asign){
	// console.log(asign)
	for(var i = 0; i < asign.length; i++){
		difference=0;
       		for (var j = 0; j < asign[i]['value[]'].length; j++) {difference=difference+Math.abs(finder['value[]'][j]-asign[i]['value[]'][j]);
		}
        if (i===0) {
            bestMatch=asign[i];
            number=difference;
        }
        else if(difference<number){
            bestMatch=asign[i];
            number=difference;
        }
    }

    return(bestMatch);
}
