/*
[x] open modal on click
  - modal should then populate with the hint and the four answer options

[x] close modal on submission of answer
  - that question should no longer be clickable

[x] check to see if answer is correct
  - if yes, add point value to score
  - if no, subtract point value to score
  - determine what the winning conditions are since the player isn't playing against the computer. should they answer ALL 30 questions?

[x] have score update in real-time

[x] have a button to reset the entire game
*/

//==============================================
// variables for dynamic modal text updates
// initiates game play by populating modals with
// questions and answer options
//==============================================

let clueText = document.getElementById('clueText');
let cluePoints = document.getElementById('points');
let answerA = document.getElementById('answerA');
let answerB = document.getElementById('answerB');
let answerC = document.getElementById('answerC');
let answerD = document.getElementById('answerD');
let points = document.getElementById('points');

//==============================================
// this allows the score to update in the header
//==============================================

let updateScore = document.querySelector('.updateScore')

//========================
// game-specific variables
//========================

let clickedHint; // this variable will change because it stands for the actual gameboard piece that was clicked
let currentScore = 0; // this is the true current score of the game at the start
let hintPoints = 0; // this is the score of the clicked hints

//==========
// functions
//==========

// opens modal on click
const revealHint = (cluenames, clue) => {
	populateModal(cluenames, clue);
	$('#clueModal').modal('show');
	// console.log('clicked'); just making sure it works
}


// populate modal information dynamically
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
// https://jsbin.com/atawaz/3/edit?html,output
const populateModal = (cluenames, clue) => {
	// this is the easiest way to generate this on the modal. the values increase by 200. don't use a comma in 1000.
	points.innerHTML = '$' + 200 * clue;
	// this is pulling the data from the key value pairs based on the "click coordinates"
	clueText.innerHTML = hints['cluenames' + cluenames]['clue' + clue].clueText;
	answerA.innerHTML = hints['cluenames' + cluenames]['clue' + clue].answerA;
	answerB.innerHTML = hints['cluenames' + cluenames]['clue' + clue].answerB;
	answerC.innerHTML = hints['cluenames' + cluenames]['clue' + clue].answerC;
	answerD.innerHTML = hints['cluenames' + cluenames]['clue' + clue].answerD;
	// this is assigning the correct answer based on the switch statement in the function
	findCorrectAnswer(hints['cluenames' + cluenames]['clue' + clue].correct);
	// assign the point value for the clicked hint --> we will need this to tally the score later
	hintPoints = event.target.innerHTML;
	// console.log(hintPoints); making sure the value is correct --> we will need to remove the $ later so that it can be an integer
	clickedHint = event.target;
}

// assign the correct answer which will be called above so that we don't get undefined -- not sure why this only works with letters as a string. it didn't work with numbers as a string.
const findCorrectAnswer = (correct) => {
	switch (correct) {
	case 'A':
		answerA.classList.add('correct');
		break;

	case 'B':
		answerB.classList.add('correct');
		break;

	case 'C':
		answerC.classList.add('correct');
		break;

	case 'D':
		answerD.classList.add('correct');
		break;
	default:
		// console.log('help') never forget to test the switch statement. it wasn't working for an entire week. credit to Raahima for pointing this out.
	}

}

// when the answer is submitted, we will want to disable the button so it can't be clicked again.
const disableButton = (event) => {
	event.classList.add('disabled');
	event.innerHTML = '';
	event.style.cursor = 'not-allowed';
	event.onclick = '';
}


const finalAnswer = () => {
	disableButton(clickedHint);
	// we will need an if else statement here so that we can add and remove classes for the correct and incorrect answers for the score tally
	if (event.target.classList.contains('correct')) {
		event.target.classList.remove('btn-primary');
		event.target.classList.add('btn-success');
		showCorrectModal();
		tallyScore(parseInt(hintPoints.substring(1)));

	} else {
		event.target.classList.remove('btn-primary');
		event.target.classList.add('btn-danger');
		showIncorrectModal();
		tallyScore(-parseInt(hintPoints.substring(1)));
		// win/lose condition--want to add AI in the future, so essentially you win if you don't lose. you can't make up the points.
		if (currentScore <= -9000) {
			showGameOverModal();
		}
	}

}

// this was the easiest way to get the score to update so that the user sees it as a dollar amount, but the computer sees it as an integer
const tallyScore = (e) => {
	currentScore = currentScore + e;
	if (currentScore >= 0)
		updateScore.innerHTML = '$' + currentScore;
	else
		updateScore.innerHTML = '-$' + Math.abs(currentScore);
	// console.log(currentScore) made sure it was working correctly
}

// continue gameplay after answering correctly
const showCorrectModal = (e) => {
	let correctModal = document.getElementById('correctModal');
	let pointsHere = document.getElementById('pointsHere');
	pointsHere.innerHTML = 'You earned $' + parseInt(hintPoints.substring(1)) + '!';
	$('.btn-success').on('click', (e) => {
		$('#correctModal').modal('hide');
	})
	$('#clueModal').modal('hide');
	$('#correctModal').modal('show');
}

// continue gameplay after answering incorrectly
const showIncorrectModal = (e) => {
	let incorrectModal = document.getElementById('incorrectModal');
	let lostPointsHere = document.getElementById('lostPointsHere');
	lostPointsHere.innerHTML = 'You lost $' + parseInt(hintPoints.substring(1)) + '!';
	$('.btn-danger').on('click', (e) => {
		$('#incorrectModal').modal('hide');
	})
	$('#clueModal').modal('hide');
	$('#incorrectModal').modal('show');
}

// ends gameplay after dropping below 9,000 points (half of the board's worth)
const showGameOverModal = (e) => {
	let gameOverModal = document.getElementById('gameOverModal')
	$('.btn-danger').on('click', (e) => {
		// real reset button here one day
	})
	$('#incorrectModal').modal('hide');
	$('#gameOverModal').modal('show');
}
