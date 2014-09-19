var cardClicks = 0;  //prevent more than 2 clicks
var card1=null;  //holds image of card1 selected
var card2=null; //holds image of card2 selected
var cardMatching = false; 
var clickEnabled = true;   //disables mid-animation clicks
var cardPairs = 0;	//game won when this matches maxPairs
var gameWon=false;






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

// var cardMatches = ['card0','card1','card2','card3','card4','card5'];
var cardMatches = ['img/card0.jpg','img/card1.jpg','img/card2.jpg',
				'img/card3.jpg','img/card4.jpg','img/card5.jpg',];
var result = cardMatches.shuffle();
console.log(result);
//YEAH THIS FUCKING WORKS!!!!
//lets try changing the array to be linked to the images in the img folder


var imgFiles = [];
var maxColumns = 4;
var imageFilename = "card";


function buildImages(){
	for(i=0;i<6;i++){
		imgFiles.push("card"+i+".jpg");
	}
}

function addCards(){
	imgFiles.shuffle();
	console.log("image array ("+imgFiles.length+" items) /// contents= "+imgFiles.toString());
	
	for(i=0;i<12;i++) {
//this is a ternary operator
		var cardNumber = i < 6 ? i : i % 6;
		var cardSet = '<div class="card-container"><div class="card" data-which=""'+i+'"><div class="front"></div><div class="back"><img src="'+'img/'+imgFiles[cardNumber]+'"></div></div></div>';
		$('.wholegame').append(cardSet);
		console.log("HTML appended: "+cardSet);
	}	

}

//can I put all of the above into this one function? 
function buildCards(){
	buildImages();
	// buildRows();
	addCards();
	// randomizeCards();
}


/*

	Create an array of cards
	Create a "for" loop that runs as many times as there are cards
	In each iteration, create a random number and get the image out of the array
	Append the new card to the html string
	Append the full html string to the dom after the loop is finished

*/