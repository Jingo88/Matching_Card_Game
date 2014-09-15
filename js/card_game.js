var cardClicks = 0;  //prevent more than 2 clicks
var card1=null;  //holds image of card1 selected
var card2=null; //holds image of card2 selected
var cardMatching = false; 
var clickEnabled = true;   //disables mid-animation clicks
var cardPairs = 0;	//game won when this matches maxPairs
var easyCards= 10;
var mediumCards=20;
var hardCards=30;
var totalCards = easyCards;
var maxPairs = totalCards/2;
var maxRows = totalCards/5;
var maxColumns = 5;
var imgFiles = [];
var imageFilename = "front_";
var gameWon=false;


$(document).ready(function(){
	//when the document is ready, we hide the card images
	$('img').hide();
	//use these to randomly generate values. 
	//target by index number
	var cardMatches = ['cardD','cardC','cardA','cardB',
	'cardA','cardD','cardB','cardC'];
	var mixing = Math.floor(Math.random()*cardMatches.length);

	//use this to load the back image of the 8 cards
	$('#start').click(function(){
		$('img').show();
});

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

	//Andre wrote this, it will increase "cardMatches" with each click
	//because the random function only runs once
	//when mixing is == to the cardmatches length we set mixing
	//back to 0
	var clicks = 0;

	$('.cards img').click(function(){
		clicks++;
		$(this).attr('src', "img/"+cardMatches[mixing++]+".jpg");
		if (mixing == cardMatches.length){
			mixing = 0;
		}
		console.log("card index is: "+ mixing);
		console.log("number of clicks are "+clicks);
	});

	//trying to get the damn reset button to work.
		$('#reset').click(function(){
		$('img').show()
});

		function buildImages(){
	for(i=0;i<maxPairs;i++){
		imgFiles.push("front_"+i+".png");
		imgFiles.push("front_"+i+".png");
	}
}

function buildRows(){
	for(i=0; i<maxRows; i++){
		var rowDivs="<div class="+"'row'"+">";
		$("#gameBox").append(rowDivs);
		// $(".row").hide();
		// $(".row").show(600);
	}
}

function randomizeCards(){
	$(".back img").each(function(index){
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


	// function()
	// if (click 1) is cardA 
	// 	and click 2 is cardA then 
	// keep these mother fucking cards flipped up. 
	// else run function reset



	//building a timer using jquery
	// var userTime = new Date;
	// setInterval(function(){
	// 	$('.timer').text((new Date - userTime)/1000 + '5000');
	// },1000);
 	
}); //end of document.ready()




$(document).ready(function(){
	console.log("ready");
	init();
});


/* apparently the following is a superior shuffle. 
Thanks to: http://goo.gl/rNKZKL*/
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

function resetGame(){
	$("#gameBox").hide(400,function(){
		console.log("========GAME RESET (with "+totalCards+" cards)=========");
		cardClicks=0;
		card1 = null;
		card2 = null;
		cardMatching = false;
		clickEnabled = true;
		cardPairs = 0;
		imgFiles =[];
		maxPairs = totalCards/2;
		maxRows = totalCards/5;
		$("#gameBox").empty();
		$("#gameBox").fadeIn(500);
		gameWon=false;
		$("h1").text("A Disney Card/Memory Game");
		$("h1").css("color","blue");	
		init();
	});
}



function checkGameStatus(){
	if(cardPairs===maxPairs){
		$("h1").text("Congrats! You Won The Game!");
		$("h1").css("color","yellow");	
		console.log("game won");
		gameWon=true;
	}
}

function compareCards(c1, c2){
	console.log("c1: "+c1+" ||||||  c2: "+c2);
	if(c1==c2){
		cardPairs++;
		console.log("cardPairs: "+cardPairs);
		return true;
	}else{
		return false;
	}
}

function resetCards(){
	cardClicks=0;
	if(!cardMatching){
		$(card1).toggleClass("colorCard");
		$(card2).toggleClass("colorCard");
	}
	unlockCards();
}

function killCardPair(){
	$(card1).removeClass("flipped");
	$(card2).removeClass("flipped");
	resetCards();
}

function colorCards(){
	$(card1).toggleClass("colorCard");
	$(card2).toggleClass("colorCard");
}

function dimCards(){
	$(card1).toggleClass("dimCard");
	$(card2).toggleClass("dimCard");
}

function unlockCards(){
	$(".card-container .card").css("cursor","pointer");
	clickEnabled=true;
}

function lockCards(){
	$(".card-container .card").css("cursor","not-allowed");
	clickEnabled=false;
}

function buildImages(){
	for(i=0;i<maxPairs;i++){
		imgFiles.push("front_"+i+".png");
		imgFiles.push("front_"+i+".png");
	}
}

function buildRows(){
	for(i=0; i<maxRows; i++){
		var rowDivs="<div class="+"'row'"+">";
		$("#gameBox").append(rowDivs);
		// $(".row").hide();
		// $(".row").show(600);
	}
}

function randomizeCards(){
	$(".back img").each(function(index){
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



function init(){
	
	buildCards();

	$(".card-container .card").click(
		function(){
		if(clickEnabled){
	//if statements order is crucial here
		if(cardClicks===0){
			card1Image = $(this).find(".back img").attr("src").substr(4);
		}
		if(cardClicks===1){
			card2Image = $(this).find(".back img").attr("src").substr(4);
		}
		if(cardClicks<2){
			cardClicks++;
			console.log("card clicks: "+cardClicks);
			$(this).addClass("flipped");
			if(cardClicks===1){
				card1= $(this);
			}
			if(cardClicks===2){
				card2= $(this);
			}
		}
		if(cardClicks===2){
			console.log("card1Image: "+card1Image);
			var cardMatch = compareCards(card1Image,card2Image);
			if(cardMatch==true){
				console.log("it's a match!");
				cardMatching=true;
				dimCards();
				resetCards();
				checkGameStatus();
			}else{
				console.log("NO MATCH");
				cardMatching=false;
				colorCards();
				lockCards();
				setTimeout(function() { killCardPair(); }, 1400);
			}
		}
	}
	});

	//game options
	$(".gameBtn").on("click",function(){
	switch($(this).attr("id")) {
	case "easy":
		totalCards=easyCards;
		break;
	case "medium":
		totalCards=mediumCards;
		break;
	case "hard":
		totalCards=hardCards;
		break;
	case "restart":
		break;
	}
		resetGame();
	});

}
