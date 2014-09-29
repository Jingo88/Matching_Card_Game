var cardClicks = 0;  //prevent more than 2 clicks
var card1=null;  //holds image of card1 selected
var card2=null; //holds image of card2 selected
var cardMatching = false; 
var clickEnabled = true;   //disables mid-animation clicks
var cardPairs = 0;	//game won when this matches maxPairs
var gameWon=false;



/* data types
	string = 'this is a string'
	integer = 1, 2, 3
	floats = 1.1, 2.2
	arrays = [1,2,3]
	objects = {a: 1, b: 2}
	booleans = true, false
	functions = function() {}
	undefined
	NaN


	1 == "1" //true
	1 === "1" //false
	0 === false //false
	0 == false //true
*/


$(document).ready(function(){

	buildCards();

});

//This explains the Array, Prototype Shuffle above, kind of.
//Fisher-Yates shuffle https://www.youtube.com/watch?v=tLxBwSL3lPQ#t=12
//putting it in the prototype shuffle you change all the "cardMatches"
//to "this"
Array.prototype.shuffle = function() {
	var i = this.length, j, temp;

	while ( --i > 0) {

		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
	return this;
}

//DO NOT NEED THEBELOW ARRAY

//double up the array? this seems like the easier way out
// var cardMatches = ['img/card0.jpg','img/card1.jpg','img/card2.jpg',
// 				'img/card3.jpg','img/card4.jpg','img/card5.jpg'];
// var result = cardMatches.shuffle();
// console.log(result);
//YEAH THIS FUCKING WORKS!!!!
//lets try changing the array to be linked to the images in the img folder



//can I use the splice method to double up the card count?


//maybe use a while loop to determine there are no more than 2 of any card
//maybe build another array with the card indexes. 
//recursive

//what if I doubled up on the imgfiles array, copy and paste to create a new array

//index of



var imgFiles = [];

function addCards(){

	imgFiles.shuffle();
	console.log("image array ("+imgFiles.length+" items) /// contents= "+imgFiles.toString());

//this loop will add the number of cards up to "i"
	for(i=0;i<12;i++) {
//this is a ternary operator
//what does the % mean in this operator?
//the % gives you the remainder after a divided equation
		//var cardNumber = i < 6 ? i : i % 6;
		
		var cardNumber = randomizeCard();
		//buildingArr.push(cardNumber);
//will be the result of the number of the function you just wrote at the bottom


		var cardSet = '<div class="card-container"><div class="card"><div class="front"></div><div class="back"><img src="'+'img/card'+cardNumber+'.jpg"></div></div></div>';
		
		$('.wholegame').append(cardSet);
		console.log("HTML appended: "+cardSet);
	}	
}


//you can use this to keep the cards flipped for a certain amount of time

// setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec

// function onTimerTick() {
//     // Do stuff.
// }

function cardFlip(){
	$('.card').click(function(){
		cardClicks++;
		
		if(cardClicks<3){
			$(this).find('.front').css('content', 'none');
			$(this).find('.back').show();
		}
	})
};


//keeping this right now, assuming I will have to do more in the future. 
function buildCards(){
	addCards();
	cardFlip();
}

/*

	Create an array of cards
	Create a "for" loop that runs as many times as there are cards
	In each iteration, create a random number and get the image out of the array
	Append the new card to the html string
	Append the full html string to the dom after the loop is finished

*/

var buildingArr = []
console.log(buildingArr);

function randomizeCard(){
	
	var randomNumber = Math.floor(Math.random()*6);

//how do I check if the array has the number twice already?
//use $.inArray(value,array)? 


	if ($.inArray(randomNumber, buildingArr) > 0) {
		randomizeCard();

//(randomeNumber is in buildingArr twice than run function randomizeCard again) {
	} else {
		(buildingArr.push(randomNumber));
	}
}
//else if it is in not in buildingArr twice than add the index to buildingArr

	//shuffle array
	//pull one index out to fill the div
	//use math.random here with the length of the array
	//return the index of the random generated card
	//build something to check the new array for 
	//if not in arrayx2 add to array else run this function again

