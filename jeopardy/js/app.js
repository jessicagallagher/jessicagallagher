/* i heavily relied on the following sources to help with using bootstrap modals that have varying modal content:

1. https://getbootstrap.com/docs/5.0/components/modal/
2. https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
3. https://jsbin.com/atawaz/3/edit?html,output */

/*
[x] open modal on click
  - modal should then populate with the hint and the four answer options

[x] close modal on submission of answer
  - that question should no longer be clickable

[] check to see if answer is correct
  - if yes, add point value to score
  - if no, subtract point value to score
  - determine what the winning conditions are since the player isn't playing against the computer. should they answer ALL 30 questions?

[x] have score update in real-time

[] have a button to reset the entire game
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
	// this function has to be called here because showing the modal isn't a function
	populateModal(cluenames, clue);
	$('#clueModal').modal('show');
	// console.log('clicked'); just making sure it works
	// console.log($(event.currentTarget)); making sure i'm on the right track for the next function
}


// populate modal information dynamically
const populateModal = (cluenames, clue) => {
	// this is the easiest way to generate this on the modal. the values increase by 200.
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

// assign the correct answer which will be called above so that we don't get undefined
const findCorrectAnswer = (correct) => {
	// using switch statement to compare the value of the expression to the value of each case(aka trying to find a match between correct and the answer option)--break means there wasn't a match so move on: https://www.w3schools.com/js/js_switch.asp
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
		console.log('help') // never forget to test the switch statement. it wasn't working this entire time.
	}

}

// when the answer is submitted, we will want to disable the button so it can't be clicked again. we will call that function within the answer submission or else we will get undefined
const disableButton = (event) => {
	event.classList.add('disabled');
	event.innerHTML = '';
	event.style.cursor = 'not-allowed';
	event.onclick = '';
}

// at this point, all testing of each code block gives an error that is based on the onclick from the html, so we are on the right track

const finalAnswer = () => {
	disableButton(clickedHint); // saved and ran and the clicked button is now disabled
	// we will need an if else statement here so that we can add and remove classes for the correct and incorrect answers for the score tally
	if (event.target.classList.contains('correct')) {
		event.target.classList.remove('btn-primary');
		event.target.classList.add('btn-success');
		showCorrectModal();
		tallyScore(parseInt(hintPoints.substring(1)));




	} else {
		event.target.classList.remove('btn-primary');
		event.target.classList.add('btn-danger');
		// tallyScore(-parseInt(hintPoints.substring(1)));
		showIncorrectModal();
		tallyScore(-parseInt(hintPoints.substring(1)));

	}
}

const tallyScore = (e) => {
	currentScore = currentScore + e;
	if (currentScore >= 0)
		updateScore.innerHTML = '$' + currentScore;
	else
		updateScore.innerHTML = '-$' + Math.abs(currentScore);
	console.log(currentScore)
}

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

// const closeModal = () => {
// 	$('#clueModal').modal('hide')
// }

// const tallyScoreSubtract = (e) => {
// 	currentScore = currentScore - e;
//
// 	updateScore.innerHTML = '$' + currentScore;
// 	// } else
// 	// 	updateScore.innerHTML = '$' + Math.abs(currentScore);
//
// }

//==============================================
// variables for modal text updates
// initiates game play by populating modals with
// questions, point values, and answer options
//==============================================

// let clueText = document.getElementById('clueText');
// let cluePoints = document.getElementById('points');
// let answerA = document.getElementById('answerA');
// let answerB = document.getElementById('answerB');
// let answerC = document.getElementById('answerC');
// let answerD = document.getElementById('answerD');
// let updateScore = document.querySelector('.updateScore');
//
// //========================
// // game-specific variables
// //========================
//
// let clickedHint; // this will change throughout the game (e.currentTarget/relatedTarget)
// let theScore = 0;
// let hintPoints = 0;
//
// const revealHint = (cluenames, clue) => {
// 	getTheClues(cluenames, clue);
// 	$('#clueModal').modal('show');
// 	// console.log('clicked') checked to see if it's actually working
// }
//
// const getTheClues = (cluenames, clue) => {
// 	// console.log(cluenames); checked to make sure it was showing the right cluename number from findTheCorrectAnswer
// 	// numToPoints so that i could add a $ to the points to make it a string on the label
// 	let numToPoints = hints['cluenames' + cluenames]['clue' + clue].points;
// 	// console.log(numToPoints)
// 	cluePoints.innerHTML = '$' + numToPoints;
// 	// cluePoints.innerHTML = hints['cluenames' + cluenames]['clue' + clue].points;
// 	clueText.innerHTML = hints['cluenames' + cluenames]['clue' + clue].clueText;
// 	answerA.innerHTML = hints['cluenames' + cluenames]['clue' + clue].answerA;
// 	answerB.innerHTML = hints['cluenames' + cluenames]['clue' + clue].answerB;
// 	answerC.innerHTML = hints['cluenames' + cluenames]['clue' + clue].answerC;
// 	answerD.innerHTML = hints['cluenames' + cluenames]['clue' + clue].answerD;
// 	findCorrectAnswer(hints['cluenames' + cluenames]['clue' + clue].correct);
// 	hintPoints = event.target.innerHTML;
// 	console.log(hintPoints)
// 	// let newPoints = parseInt(hintPoints.substring(1))
// 	// console.log(newPoints)
// 	clickedHint = event.target;
// 	// console.log(event.target); making sure i have the right target to generate the score
//
// }
//
// // using switch statement to compare the value of the expression to the value of each case(aka trying to find a match between correct and the answer option)--break means there wasn't a match so move on: https://www.w3schools.com/js/js_switch.asp
// const findCorrectAnswer = (correct) => {
// 	switch (correct) {
// 	case '1':
// 		answerA.classList.add('correct');
// 		break;
// 	case '2':
// 		answerB.classList.add('correct');
// 		break;
// 	case '3':
// 		answerC.classList.add('correct');
// 		break;
// 	case '4':
// 		answerD.classList.add('correct');
// 		break;
// 	}
// }
//
// const disable = (e) => {
// 	e.classList.remove('clue');
// 	e.classList.add('disabled');
// 	e.innerHTML = '';
// }
//
// const finalAnswer = () => {
// 	disable(clickedHint);
// 	if (event.target.classList.contains('correct')) {
// 		event.target.classList.remove('btn-primary');
// 		event.target.classList.add('btn-win');
// 		tallyScore(parseInt(hintPoints.substring(1)));
// 		// console.log(hintPoints)
// 		$('#clueModal').modal('hide');
// 		target.classList.remove('btn-win');
// 		target.classList.add('btn-primary');
// 	} else {
// 		$('#clueModal').modal('hide');
// 		// target.classList.remove('btn-lose');
// 		// target.classList.add('btn-primary');
// 	}
// }
//
// const tallyScore = (e) => {
// 	score = score + e;
// 	if (score >= 0)
// 		updateScore.innerHTML = '$' + score;
// 	else
// 		updateScore.innerHTML = '$' + Math.abs(score);
// }
//
// // $('#clueModal').on('hidden.bs.modal', () => {
// // 	answerA.classList.remove('correct');
// // 	answerB.classList.remove('correct');
// // 	answerC.classList.remove('correct');
// // 	answerD.classList.remove('correct');
// // });
