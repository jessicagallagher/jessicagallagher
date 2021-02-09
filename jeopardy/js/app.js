/* i heavily relied on the following sources to help with using bootstrap modals that have varying modal content:

1. https://getbootstrap.com/docs/5.0/components/modal/
2. https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
3. https://jsbin.com/atawaz/3/edit?html,output */

/*
[] open modal on click
  - modal should then populate with the hint and the four answer options

[] close modal on submission of answer
  - that question should no longer be clickable

[] check to see if answer is correct
  - if yes, add point value to score
  - if no, subtract point value to score
  - determine what the winning conditions are since the player isn't playing against the computer. should they answer ALL 30 questions?

[] have score update in real-time

[] have a button to reset the entire game
*/

//==============================================
// variables for modal text updates
// initiates game play by populating modals with
// questions, point values, and answer options
//==============================================

let cluenamesLabel = document.getElementbyId('cluenamesLabel');
let clueText = document.getElementById('clueText');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');
let answer4 = document.getElementById('answer4');

//========================
// game-specific variables
//========================

let theScore = document.getElementById('theScore'); // updates score in header
let currentScore = 0; // should match score in header
let hintPoints = 0; // point value of clickedHint
let clickedHint; // this will change throughout the game (e.currentTarget)
