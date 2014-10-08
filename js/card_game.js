var cardClicks = 0;  //prevent more than 2 clicks
var card1=null;  //holds image of card1 selected
var card2=null; //holds image of card2 selected
var cardMatching = false; 
var clickEnabled = true;   //disables mid-animation clicks
var cardPairs = 0;	//game won when this matches maxPairs
var gameWon=false;
var newCardArray = [];
var cardMarkup = '';

$(document).ready(function(){

	buildCards();

});

//you can use this to keep the cards flipped for a certain amount of time

// setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec

// function onTimerTick() {
//     // Do stuff.
// }

// var imgFiles = [];

function cardFlip(){
	$('.card').click(function(){
		cardClicks++;

		if(cardClicks<3){
			$(this).find('.front').css('content', 'none');
			$(this).find('.back').show();
		}
	})
};

function addCards(){
	
	for(i=0;i<12;i++) {

		getValidRandomNum(i);

	}	
}
 
function getValidRandomNum(iterationNumber){

		var randomNumber = Math.floor(Math.random()*6);
		
		var numOccurrences = getNumberOfOccurrences(randomNumber,newCardArray);

		if (numOccurrences == 2){
			getValidRandomNum(iterationNumber);
		} else {
			getValidRandomNumberFinished(iterationNumber, randomNumber);
		}
}

function getValidRandomNumberFinished(iterationNumber, randomNumber) {

	cardMarkup += '<div class="card-container"><div class="card"><div class="front"></div><div class="back"><img src="'+'img/card'+randomNumber+'.jpg"></div></div></div>';
	newCardArray.push(randomNumber);

	if(iterationNumber == 11) {
		$('.wholegame').append(cardMarkup);
	}
}

function getNumberOfOccurrences(searchValue, searchArray){

	var numOccurrences = 0;

	for (var i=0; i < searchArray.length; i++) {
		if( searchValue	== searchArray[i]) {
			numOccurrences++; 
		}
	}
	return numOccurrences;
}

function buildCards(){
	addCards();
	cardFlip();
}
