var cardClicks = 0;  //prevent more than 2 clicks
var card1=null;  //holds image of card1 selected
var card2=null; //holds image of card2 selected
var cardMatching = false; 
var clickEnabled = true;   //disables mid-animation clicks
var cardPairs = 0;	//game won when this matches maxPairs
var maxPairs = 6;
var maxRows = 3; 
var maxColumns = 5;
var imgFiles = [];
var imageFilename = "card";
var gameWon=false;


$(document).ready(function(){

	buildCards();

});

//this is your array. found this on stack overflow
//what the hell is going on here!?!?!?!
Array.prototype.shuffle = function (){
    var i = this.length, j, temp;
    if ( i == 0 ) return;
    while ( --i ) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
};


//Trying another shuffle
var cardMatches = ['card0','card1','card2','card3','card4','card5']

// //This explains the Array, Prototype Shuffle above, kind of.
// function shuffle(array){
// 	var currentIndex = array.length, temporaryValue, randomIndex;

// 	while (0 !== currentIndex) {

// 		randomIndex = Math.floor(Math.random() * currentIndex);
// 		currentIndex -= 1;

// 		temporaryValue = array[currentIndex];
// 		array[currentIndex] = array[randomIndex];
// 		array[randomIndex] = temporaryValue;
// 	}
// 	return array;
// }

function buildImages(){
	for(i=0;i<6;i++){
//There are two imgFiles.Push because you need two cards to match
//Push method adds new items to the end of an array
		imgFiles.push("card"+i+".jpg");
		imgFiles.push("card"+i+".jpg");
	}
}

function buildRows(){
	for(i=0; i<3; i++){
//The append method inserts the content as the last child of each 
//element in the JQuery collection
//Prepend does the same thing except adds it as the first. 
		var rowDivs="<div class="+"'cardrow'"+">";
		$(".wholegame").append(rowDivs);
	}
}

function randomizeCards(){
//where does this "function(index)" pull from?
	$(".card_back img").each(function(index){
		$(this).attr("src","img/"+imgFiles[index]);
	});
}

function addCards(){
	imgFiles.shuffle();
	console.log("image array ("+imgFiles.length+" items) ////////// contents= "+imgFiles.toString());
	$(".row").each(
	function(index){
		for(i=0;i<maxColumns;i++){
			var cardSet = '<div class="card-container"><div class="card" data-which=""'+i+'"><div class="front"></div><div class="back"><img src="'+'img/'+imgFiles[i]+'"></div></div></div>';
			$(this).append(cardSet);
			console.log("HTML appended: "+cardSet);
			}	
		});
}

function buildCards(){
	buildImages();
	buildRows();
	addCards();
	randomizeCards();
	$(".card").hide();
	$(".card").show(600);
}







