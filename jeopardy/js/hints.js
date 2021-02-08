// html question source: https://www.w3schools.com/html/
// css question source: https://www.w3schools.com/css/default.asp
// javascript question source: https://www.w3schools.com/js/default.asp
// cli question source: https://medium.com/@jennyjudova/command-line-cheat-sheet-mac-linux-f6f669f07a78
// github question source: https://education.github.com/git-cheat-sheet-education.pdf
// lolz question source: https://medium.com/better-programming/101-funny-programmer-quotes-76c7f335b92d

const hints = [
/* $200 questions */
	{
		hint: '<link>, <img>, <hr>, <br>... to name a few',
		answers: ['What are elements required to render a successful document?', 'What are self-closing tags?', 'What are elements that require alt-text?', 'What are elements that should be included in a <div>?'],
		correct: 'What are self-closing tags?',
		points: 200
},
	{
		hint: 'Padding, Border, Margin',
		answers: ['What is the Box Model?', 'What are attributes required for every selector?', 'What are properties considered necessary for Flexbox?', 'What are attributes that all mean the same thing?'],
		correct: 'What is the Box Model?',
		points: 200
},
	{
		hint: '!false',
		answers: ['What is null?', 'What is false?', 'What is true?', 'What is the incorrect way to use a boolean?'],
		correct: 'What is true?',
		points: 200
},
	{
		hint: 'I wish I knew all of the contents of this folder... I think something\'s hiding! There\'s a command for this.',
		answers: ['What is ls -a', 'What is ls?', 'What is ls -l?', 'What is ls ~?'],
		correct: 'What is ls -a?',
		points: 200
},
	{
		hint: 'I can\'t remember if I added everything that I wanted to commit to staging. There\'s a command for this.',
		answers: ['What is git log?', 'What is git status?', 'What is git help?', 'What is git init?'],
		correct: 'What is git status?',
		points: 200
},
	{
		hint: 'In the context of programming... Rubber ducky, you\'re the one. You make coding lots of fun!',
		answers: ['What is a song from Rugrats?', 'What is Rubber Duck coding?', 'What is a catchy tune?', 'What is something that doesn\'t make sense to me?'],
		correct: 'What is Rubber Duck coding?',
		points: 200
},
/* $400 questions */
	{
		hint: 'This HTML element attribute is used for something that probably happens once or twice.',
		answers: ['What is an aside?', 'What is .unique?', 'What is an id?', 'What is a class?'],
		correct: 'What is an id?',
		points: 400
},
	{
		hint: 'This CSS property allows you to identify which type of font you\'d like to use.',
		answers: ['What is font?', 'What is font-style?', 'What is text?', 'What is font-family?'],
		correct: 'What is font-family?',
		points: 400
},
	{
		hint: 'This type of operator description let\'s you determine whether there\'s a remainder.',
		answers: ['What is the modulus?', 'What is division?', 'What is decrement?', 'What is combining division and subtraction?'],
		correct: 'What is the modulus?',
		points: 400
},
	{
		hint: 'This command removes a directory and everything in it.',
		answers: ['What is cp -r?', 'What is rm?', 'What is rmdir?', 'What is rm -r?'],
		correct: 'What is rm -r?',
		points: 400
},
	{
		hint: 'This is one way to turn an existing directory into a Git repository.',
		answers: ['What is git init?', 'What is git --setup <file>', 'What is git clone (URL)?', 'What is git log?'],
		correct: 'What is git init?',
		points: 400
},
	{
		hint: 'In the context of programming, they don\'t die, they multiply!',
		answers: ['What are features?', 'What are bugs?', 'What are chores?', 'What are breakpoints?'],
		correct: 'What are bugs?',
		points: 400
},
/* $600 questions */
	{
		hint: 'This HTML tag defines a hyperlink.',
		answers: ['What is <a>?', 'What is <link>', 'What is <src>?', 'What is <href>?'],
		correct: 'What is <a>?',
		points: 600
},
	{
		hint: 'This CSS property improves a browser\'s handling of small windows.',
		answers: ['What is width?', 'What is position?', 'What is max-width?', 'What is display?'],
		correct: 'What is max-width?',
		points: 600
},
	{
		hint: 'This loop is a great choice to use if you already know how many times you need to loop through something.',
		answers: ['What is a For In loop?', 'What is a For loop?', 'What is a While loop?', 'What is a For Of loop?'],
		correct: 'What is a For loop?',
		points: 600
},
	{
		hint: 'This command will print your file.',
		answers: ['What is prnt?', 'What is cat?', 'What is touch-print?', 'What is print <file>?'],
		correct: 'What is cat?',
		points: 600
},
	{
		hint: 'This command will grab all the commits from the remote branch and merge them into your own branch.',
		answers: ['What is push?', 'What is fetch?', 'What is merge?', 'What is pull?'],
		correct: 'What is pull?',
		points: 600
},
	{
		hint: 'Regina George (Mean Girls) would NOT be happy about this GitHub term... Stop trying to make it happen!',
		answers: ['What is fetch?', 'What is merge?', 'What is upstream?', 'What is master?'],
		correct: 'What is fetch?',
		points: 600
},
/* $800 questions */
	{
		hint: 'In HTML, a table is made of these elements.',
		answers: ['What is <table>, <row>, <column>?', 'What is <tb>, <td>?', 'What is <table>, <tr>, <th>, <td>?', 'What is <table>, <h1>, <section>?'],
		correct: 'What is <table>, <tr>, <th>, <td>?',
		points: 800
},
	{
		hint: 'The opacity property specifies the transparency of an element. It takes one of these values.',
		answers: ['What are numbers between 0.0 - 1.0?', 'What is any integer?', 'What are positive numbers only?', 'What are numbers between 0 - 100?'],
		correct: 'What are numbers between 0.0 - 1.0?',
		points: 800
},
	{
		hint: 'This JavaScript object is used to hold multiple objects.',
		answers: ['What is an array?', 'What is an object key?', 'What are key value pairs?', 'What is an object literal?'],
		correct: 'What is an array?',
		points: 800
},
	{
		hint: 'This command moves a file or folder into another folder that\'s in the same directory.',
		answers: ['What is mv?', 'What is cp?', 'What is mvdir?', 'What is mv -dir?'],
		correct: 'What is mv?',
		points: 800
},
	{
		hint: 'This command is important when considering version control.',
		answers: ['What is git show?', 'What is git config?', 'What is git commit?', 'What is git push?'],
		correct: 'What is git commit?',
		points: 800
},
	{
		hint: 'This character has been the hide and seek champion since 1958.',
		answers: ['What is the comma?', 'What is the curly bracket?', 'What is the semicolon?', 'What is the dollar sign?'],
		correct: 'What is the semicolon?',
		points: 800
},
/* $1,000 questions */
	{
		hint: 'This element is an inline container used to mark up only part of a text.',
		answers: ['What is <aside>?', 'What is <section>?', 'What is <span>?', 'What is <style>?'],
		correct: 'What is <span>?',
		points: 1000
},
	{
		hint: 'This type of display allows you to set the width, height, margin, and padding of an element, while allowing that element to sit next to other elements.',
		answers: ['What is inline-block?', 'What is block?', 'What is inline?', 'What is max-height?'],
		correct: 'What is inline-block?',
		points: 1000
},
	{
		hint: 'In the context of the most recent version of JavaScript, this variable declaration allows you to redeclare the variable later.',
		answers: ['What is var?', 'What is const?', 'What is let?', 'What are both const and let?'],
		correct: 'What is let?',
		points: 1000
},
	{
		hint: 'To infinity and beyond! This command stops a program from running when you\'ve written an infinite loop.',
		answers: ['What is CTRL C?', 'What is CTRL ALT DELETE?', 'What is CMD F?', 'What is ESC?'],
		correct: 'What is CTRL C?',
		points: 1000
},
	{
		hint: 'This request alerts the original owner of a repository that you\'ve made changes to their code that might be beneficial.',
		answers: ['What is a merge request?', 'What is a fork request?', 'What is a pull request?', 'What is a commit request?'],
		correct: 'What is a pull request?',
		points: 1000
},
	{
		hint: 'This word is used by programmers when they don\'t want to explain what they just did.',
		answers: ['What is an algorithm?', 'What is a function?', 'What is a loop?', 'What is a RegExp?'],
		correct: 'What is an algorithm?',
		points: 1000
}
];

export default hints;
