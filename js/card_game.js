(function(){
    const startButton = document.querySelector('#start');
    const resetButton = document.querySelector('#reset');
    let cardClicks = 0;  //prevent more than 2 clicks
	let clickEnabled = true;   //disables mid-animation clicks
	let cardPairs = 0;	//game won when this matches maxPairs
	let gameWon=false;

	// stores card mark up to be added to wholeGame innerHTML
	let newCardArray = [];

	// update userpick with card number
	let userPick = null;

	let cardObj = {
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0
	};
	let totalCards = 0;



	let wholeGame = document.querySelector('#wholeGame');

	const getImg = function(){
		let randNum = Math.floor(Math.random()*6);
		
		if (cardObj[randNum] < 2){
			let imgSrc = `img/card${randNum}.jpg`;

			let	cardMarkup = `
				<div class="card-container">
					<div class="card" data-name="${randNum}">
						<div class="front" data-name="${randNum}">
                            <img src="img/card_back.jpg" data-name="${randNum}"/>
						</div>
						<div class="back">
                            <img src="${imgSrc}" data-name="${randNum}"/>
						</div>
					</div>
				</div>
			`;
			cardObj[randNum]++;
			totalCards++;
			return cardMarkup;
		} else {
			return getImg();
		}
	}

	const buildCards = function(){
        while (wholeGame.firstChild) {
            wholeGame.removeChild(wholeGame.firstChild);
        }

		while (totalCards < 12){
			newCardArray.push(getImg())
		}
		newCardArray.map((card)=>{
			wholeGame.innerHTML += card
		})
	}

// limit it to two clicks at a time. just in case the user clicks around quickly
	const cardFlip = function(e){

        let target = e.target.dataset.name  

		if (target === undefined || gameWon){
			return;
		} 
        
		// path[2] targets the .card div that wraps front and back
		let cardFlip = e.path[2]
		// apply the flip class to that card dive
		cardFlip.classList.toggle('flip');
		
		if (userPick === null){
			userPick = target;
		} else if (userPick === target){
			userPick = null;
			cardPairs++
		} else {
			setTimeout(()=> {
				document.querySelector(`.flip[data-name="${userPick}"]`).classList.toggle('flip');
				document.querySelector(`.flip[data-name="${target}"]`).classList.toggle('flip');
				userPick = null;	
			}, 1000)
		}

		if (cardPairs === 6){
            gameWon = true
            
            setTimeout(()=>{
                alert("You Win")
            }, 1000);
			
		}
	}
	
    wholeGame.addEventListener('click', cardFlip);
    startButton.addEventListener('click', buildCards);
})();