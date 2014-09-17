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

var cardMatches = ['card0','card1','card2','card3','card4','card5'];
var result = cardMatches.shuffle();
console.log(result);
//YEAH THIS FUCKING WORKS!!!!



var imgFiles = [];
var maxColumns = 4;
var maxPairs = 6;
var maxRows = 3; 
var imageFilename = "card";


function buildImages(){
	for(i=0;i<6;i++){
//There are two imgFiles.Push because you need two cards to match
//Push method adds new items to the end of an array
		imgFiles.push("card"+i+".jpg");
	}
}



// function buildRows(){
	// for(i=0; i<3; i++){
//The append method inserts the content as the last child of each 
//element in the JQuery collection
//Prepend does the same thing except adds it as the first. 
		// $(".wholegame").append("<div class="+"'cardrow'"+">");
	// }
// }


// function randomizeCards(){
// //where does this "function(index)" pull from?
// 	// $(".card_back img").each(function(index){
// 		$(this).attr("src",".../img/"+imgFiles[index]);
// 	// }
// }
// // );
// // }

function addCards(){
	imgFiles.shuffle();
	console.log("image array ("+imgFiles.length+" items) /// contents= "+imgFiles.toString());
	
	for(i=0;i<12;i++) {
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