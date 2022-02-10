// tollbooth.js
// Matches https://docs.google.com/spreadsheets/d/1eu_ymKNlnSQUzi6JfSyOwWewXX2fybDIw2YZfzhWIic/edit
scene1 = tollbooth;

function checkAnswers(answer) {  // Matches Scenes  - replace with yours
	if (answer == "First Time") {
		meetMilo();
	} 
	
	else if (answer == "Second Life") {
		discoverTollbooth();
	} 
	else if (answer == "Sigh") {
		walkingHome();
	} 
	
	else if (answer == "Sigh again") {
		discoverTollbooth();
	} 
	
	else if (answer == "Unpack it") {
		unpackTollbooth();
	} 
	
	else if (answer == "Sleep on it") {
		wildNightmares();
	}
	else if (answer == "Tell mom") {
		momCantSeeIt();
	}
	
	else if (answer == "Assemble it") {
		enterKingdomOfWisdom();
	}
}

function removeMap(){
    document.getElementById('border').classList.remove('hide');
}

//1.1 Opening Scene
function tollbooth() {
  setTimeout(removeMap, 2500);
  story("You are a boy named Milo and you live in a city and go to middle school.<br><br> You tend to not know what to do with yourself -- not just sometimes, but always. It's a big problem for you.");
	choices = ["First Time","Second Life"];
	answer = setOptions(choices);
}

//1.2 Meet Milo
function meetMilo() {
messages=["When you are in school you long to be out, and when you are out you long to be in. On the way you think about coming home, and coming home you think about going. Wherever you are you wish you were somewhere else, and when you get there you wonder why you bothered. Nothing really interests you—least of all the things that should.", "\"It seems to me that almost everything is a waste of time,\" you say out loud one day as you walk dejectedly home from school. \"I can't see the point in learning to solve useless problems, or subtracting turnips from turnips, or knowing where Ethiopia is or how to spell February.\"",
	"And, since no one ever bothered to explain otherwise, you regard the process of seeking knowledge as the greatest waste of time of all."]; 
    delayText(messages, 2000);
    choices = ["Sigh"];
	answer = setOptions(choices);
}

// 1.3 Walking Home
function walkingHome() {
messages=["As you and your unhappy thoughts hurry along (for while you are never anxious to be where you are going, you like to get there as quickly as possible) it seems a great wonder that the world, which was so large, could sometimes feel so small and empty.", "\"And worst of all,\" you continue to say out loud, \"there's nothing for me to do, nowhere I'd care to go, and hardly anything worth seeing.\"","You punctuate this last thought with such a deep sigh that a house sparrow singing nearby stops and rushes home to be with his family.","Without stopping or looking up, you rush past the buildings and busy shops that line the street and in a few minutes reach home—dash through the lobby—hop onto the elevator—two, three, four, five, six, seven, eight, and off again—open the apartment door—rush into your room—flop dejectedly into a chair, and grumble softly, \"Another long afternoon.\""]; 
    delayText(messages, 1000);
    choices = ["Sigh again"];
	answer = setOptions(choices);
}

// 1.4 Discover Tollbooth
function discoverTollbooth() {
  story("You look glumly at all the things you own.  The books that are too much trouble to read, the tools you never learned to use, and the other games and toys and  bits and pieces scattered around you. The ATV you haven't taken out all year.<br><br>And then, to one side of the room, just next to your computer, you notice something you have certainly never seen before!<br><br>Who could POSSIBLY have left such an enormous package and such a strange one? For, while it is not quite square, it is definitely not round, and for its size it is larger than almost any other big package of smaller dimension that you've ever seen!<br><br>Attached to one side is a bright-blue envelope which says simply: <br><br>\"FOR MILO, WHO HAS PLENTY OF TIME.\"");
	choices = ["Unpack it", "Sleep on it", "Tell mom"];
	answer = setOptions(choices);
}

// 1.5 Wild Nightmares
function wildNightmares() {
	story("You have horrible nightmares about what happens to people when they don’t make choices.  You find yourself in a corner, covered with dust and cobwebs, as your brain rots away.  You wake up in a cold sweat.  And there is that big box, in the same place it was before.  What do you do?");
	choices = ["Unpack it","Tell Mom","Call the Bomb Squad"];
	answer = setOptions(choices);
}

// 1.6 Mom Can't See It
function momCantSeeIt() {
	story("You tell mom and she comes to your room with you.  You point at the box.  She says she can’t see it.  You are very angry and frustrated and yell at her.  She sends you to bed and tells you to come out again when you are reasonable. What do you do now?");
	choices = ["Unpack it","Sleep on it","Call the Bomb Squad"];
	answer = setOptions(choices);
}

// 1.7 Call the Bomb Squad
function callBombSquad() {
	story("[Under Construction] They cannot see it.");
    choices = ["Unpack it", "Check return address"];
	answer = setOptions(choices);
}

// 1.8 Check Return Address
function checkReturnAddress() {
	story("[Under Construction] There is no return address.");
    choices = ["Unpack it", "Pray for help"];
	answer = setOptions(choices);
}

// // 1.9 Unpack Tollbooth
function unpackTollbooth() {
messages=["In the attached envelope, you find a folded paper that says \"READ ME FIRST!\" You unfold it, and read the following list of contents: ", "\"One (1) genuine turnpike tollbooth to be erected according to directions.\"","\"Assorted coins for use in paying tolls.\"","\"One (1) map, up to date and carefully drawn by master cartographers,depicting natural and man-made features.\"","\"One (1) book of rules and traffic regulations, which may not be bent or broken.\"", "And in smaller letters at the bottom it concludes:\"Results are not guaranteed, but if not perfectly satisfied, your wasted time will be refunded.\""]; 
    delayText(messages, 2000);
    choices = ["Assemble it"];
	answer = setOptions(choices);
}

// 1.10 Enter Kingdom of Wisdom
function enterKingdomOfWisdom() { 
  story("[Under Construction] Once the tollbooth (for it is a tollbooth) is assembled, a man magically appears within it.  You approach, and the man says, \"Cars only.\"  You start up your ATV and drive up to the tollbooth (your room got much larger). The man says, \"One token, please.\" You reach into your pocket, find one of the tokens from the box, and give it to the man. <br><br>  He accepts it, and you drive by the booth. <br><br>  Suddenly the landscape changes, and you see high, pointy mountains in the distance, and a forest directly ahead along the road as you walk.  You feel excited and scared at the same time.<br><br>   The road splits into three, and there is a signpost with three signs, each with a name and pointing to a road.  Pointing left says Words, pointing center says Numbers, and pointing right says Whatever. <br><br>Which road do you follow?");
	choices = ["Left","Center","Right"];
	answer = setOptions(choices);
}

