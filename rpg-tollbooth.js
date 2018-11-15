// rpg-tollbooth.js


// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;
// story function variables
var spin = 0;

function checkAnswers(answer) {  // Matches Scenes  - replace with yours
	if (answer == "Approach") {
		enterKingdomOfWisdom();
	} 
	else if (answer == "Sleep on it") {
		wildNightmares();
	}
	else if (answer == "Tell mom") {
		momCantSeeIt();
	}
}

function enterKingdomOfWisdom() { 
  story("You walk up to the tollbooth.  The man says hello, and asks you for a penny. You reach into your pocket and find one. You give it to him. He says, “Welcome to the Kingdom of Wisdom!” as you walk by the booth.  Suddenly the landscape changes, and you see high, pointy mountains in the distance, and a forest directly ahead along the road as you walk.  You feel excited and scared at the same time. \ \nThe road splits into three, and there is a signpost with three signs, each with a name and pointing to a road.  Pointing left says Words, pointing center says Numbers, and pointing right says Whatever. Which road do you follow?");
	choices = ["Left","Center","Right"];
	answer = setOptions(choices);
}
function wildNightmares() {
	story("You have horrible nightmares about what happens to people when they don’t make choices.  You find yourself in a corner, covered with dust and cobwebs, as your brain rots away.  You wake up in a cold sweat.  And run outside and find yourself again at the tollbooth on another sunny day.");
	choices = ["Enter Now","Tell Mom"," "];;
	answer = setOptions(choices);
}

function momCantSeeIt() {
	story("You tell mom and she comes outside with you.  You point at the tollbooth.  She says she can’t see it.  You are very angry and frustrated and yell at her.  She sends you to bed and tells you to come out again when you are reasonable. ");
	choices = ["Enter Now","Sleep on it"," "];
	answer = setOptions(choices);
}

function tollbooth(){  // FIRST SCENE - WELCOMES PLAYER
	story("Your name is Milo and you like to walk and daydream.  One day, walking along a country road on a pleasant afternoon, you see a tollbooth appear from nowhere. What do you do?");
	choices = ["Approach", "Sleep on it", "Tell mom"];
	answer = setOptions(choices);
}
