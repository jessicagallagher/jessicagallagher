// html question source: https://www.w3schools.com/html/
// css question source: https://www.w3schools.com/css/default.asp
// javascript question source: https://www.w3schools.com/js/default.asp
// cli question source: https://medium.com/@jennyjudova/command-line-cheat-sheet-mac-linux-f6f669f07a78
// github question source: https://education.github.com/git-cheat-sheet-education.pdf
// lolz question source: https://medium.com/better-programming/101-funny-programmer-quotes-76c7f335b92d

const hints = {
	// html category
	cluenames1: {
		cluenamesLabel: 'HTML',
		clue1: {
			clueText: '<link>, <img>, <hr>, <br>... to name a few',
			answer1: 'What are elements required to render a successful document?',
			answer2: 'What are self-closing tags?',
			answer3: 'What are elements that require alt-text?',
			answer4: 'What are elements that should be included in a <div>?',
			correct: 2,
			points: 200
		},
		clue2: {
			clueText: 'This HTML element attribute is used for something that probably happens once or twice.',
			answer1: 'What is an aside?',
			answer2: 'What is unique?',
			answer3: 'What is an id?',
			answer4: 'What is a class?',
			correct: 3,
			points: 400
		},
		clue3: {
			clueText: 'This HTML tag allows a hyperlink.',
			answer1: 'What is <a>?',
			answer2: 'What is <link>',
			answer3: 'What is <src>?',
			answer4: 'What is <href>?',
			correct: 1,
			points: 600
		},
		clue4: {
			clueText: 'In HTML, a table is made of these elements.',
			answer1: 'What is <table>, <row>, <column>?',
			answer2: 'What is <tb>, <td>?',
			answer3: 'What is <table>, <tr>, <th>, <td>?',
			answer4: 'What is <table>, <h1>, <section>?',
			correct: 3,
			points: 800
		},
		clue5: {
			clueText: 'This element is an inline container used to mark up only part of a text.',
			answer1: 'What is <aside>?',
			answer2: 'What is <section>?',
			answer3: 'What is <span>?',
			answer4: 'What is <style>?',
			correct: 3,
			points: 1000
		}
	},
	// css category
	cluenames2: {
		cluenamesLabel: 'CSS',
		clue1: {
			clueText: 'Padding, Border, Margin',
			answer1: 'What is the Box Model?',
			answer2: 'What are attributes required for every selector?',
			answer3: 'What are properties considered necessary for Flexbox?',
			answer4: 'What are attributes that all mean the same thing?',
			correct: 1,
			points: 200
		},
		clue2: {
			clueText: 'This CSS property allows you to identify which type of font you\'d like to use.',
			answer1: 'What is font?',
			answer2: 'What is font-style?',
			answer3: 'What is text?',
			answer4: 'What is font-family?',
			correct: 4,
			points: 400
		},
		clue3: {
			clueText: 'This CSS property improves a browser\'s handling of small windows.',
			answer1: 'What is width?',
			answer2: 'What is position?',
			answer3: 'What is max-width?',
			answer4: 'What is display?',
			correct: 3,
			points: 600
		},
		clue4: {
			clueText: 'The opacity property specifies the transparency of an element. It takes one of these values.',
			answer1: 'What are numbers between 0.0 - 1.0?',
			answer2: 'What is any integer?',
			answer3: 'What are positive numbers only?',
			answer4: 'What are numbers between 0 - 100?',
			correct: 1,
			points: 800
		},
		clue5: {
			clueText: 'This type of display allows you to set the width, height, margin, and padding of an element, while allowing that element to sit next to other elements.',
			answer1: 'What is inline-block?',
			answer2: 'What is block?',
			answer3: 'What is grid?',
			answer4: 'What is flex?',
			correct: 1,
			points: 1000
		},
	},
	// javascript category
	cluenames3: {
		cluenamesLabel: 'JavaScript',
		clue1: {
			clueText: '!false',
			answer1: 'What is null?',
			answer2: 'What is false?',
			answer3: 'What is true?',
			answer4: 'What is the incorrect way to use a boolean?',
			correct: 3,
			points: 200
		},
		clue2: {
			clueText: 'This type of operator description let\'s you determine whether there\'s a remainder.',
			answer1: 'What is the modulus?',
			answer2: 'What is division?',
			answer3: 'What is decrement?',
			answer4: 'What is combining division and subtraction?',
			correct: 1,
			points: 400
		},
		clue3: {
			clueText: 'This type of loop is a great choice to use if you already know how many times you need to loop through something.',
			answer1: 'What is a For In loop?',
			answer2: 'What is a For loop?',
			answer3: 'What is a While loop?',
			answer4: 'What is a For Of loop?',
			correct: 2,
			points: 600
		},
		clue4: {
			clueText: 'This JavaScript object can be used to hold multiple objects, including itself.',
			answer1: 'What is an array?',
			answer2: 'What is an object key?',
			answer3: 'What are key value pairs?',
			answer4: 'What is an object literal?',
			correct: 1,
			points: 800
		},
		clue5: {
			clueText: 'In the context of the most recent version of JavaScript, this variable declaration allows you to redeclare the variable later.',
			answer1: 'What is var?',
			answer2: 'What is const?',
			answer3: 'What is let?',
			answer4: 'What are both const and let?',
			correct: 3,
			points: 1000
		},
	},
	// cli category
	cluenames4: {
		cluenamesLabel: 'CLI',
		clue1: {
			clueText: 'I wish I knew all of the contents of this folder... I think something\'s hiding! There\'s a command for this.',
			answer1: 'What is ls -a',
			answer2: 'What is ls?',
			answer3: 'What is ls -l?',
			answer4: 'What is ls ~?',
			correct: 1,
			points: 200
		},
		clue2: {
			clueText: 'This command removes a directory and everything in it.',
			answer1: 'What is cp -rm?',
			answer2: 'What is rm?',
			answer3: 'What is rmdir?',
			answer4: 'What is rm -r?',
			correct: 4,
			points: 400
		},
		clue3: {
			clueText: 'This command will print your file.',
			answer1: 'What is prnt?',
			answer2: 'What is cat?',
			answer3: 'What is touch-print?',
			answer4: 'What is print <file>?',
			correct: 2,
			points: 600
		},
		clue4: {
			clueText: 'This command moves a file or folder into another folder that\'s in the same directory.',
			answer1: 'What is mv?',
			answer2: 'What is cp?',
			answer3: 'What is mvdir?',
			answer4: 'What is mv -dir?',
			correct: 1,
			points: 800
		},
		clue5: {
			clueText: 'To infinity and beyond! This command stops a program from running when you\'ve written an infinite loop.',
			answer1: 'What is CTRL C?',
			answer2: 'What is CTRL ALT DELETE?',
			answer3: 'What is CMD F?',
			answer4: 'What is ESC?',
			correct: 1,
			points: 1000
		},
	},
	// github category
	cluenames5: {
		cluenamesLabel: 'GitHub',
		clue1: {
			clueText: 'I can\'t remember if I added everything that I wanted to commit to staging. There\'s a command for this.',
			answer1: 'What is git log?',
			answer2: 'What is git status?',
			answer3: 'What is git help?',
			answer4: 'What is git init?',
			correct: 2,
			points: 200
		},
		clue2: {
			clueText: 'This is one way to turn an existing directory into a Git repository.',
			answer1: 'What is git init?',
			answer2: 'What is git --setup <file>',
			answer3: 'What is git clone (URL)?',
			answer4: 'What is git log?',
			correct: 1,
			points: 400
		},
		clue3: {
			clueText: 'This command will grab all the commits from the remote branch and merge them into your own branch.',
			answer1: 'What is push?',
			answer2: 'What is fetch?',
			answer3: 'What is merge?',
			answer4: 'What is pull?',
			correct: 4,
			points: 600
		},
		clue4: {
			clueText: 'This command is important when considering version control.',
			answer1: 'What is git show?',
			answer2: 'What is git config?',
			answer3: 'What is git commit?',
			answer4: 'What is git push?',
			correct: 3,
			points: 800
		},
		clue5: {
			clueText: 'This request alerts the original owner of a repository that you\'ve made changes to their code that might be beneficial.',
			answer1: 'What is a merge request?',
			answer2: 'What is a fork request?',
			answer3: 'What is a pull request?',
			answer4: 'What is a commit request?',
			correct: 3,
			points: 1000
		},
	},
	// lolz category
	cluenames6: {
		cluenamesLabel: 'LOLZ',
		clue1: {
			clueText: 'In the context of programming... Rubber ducky, you\'re the one. You make coding lots of fun!',
			answer1: 'What is a song from Rugrats?',
			answer2: 'What is Rubber Duck coding?',
			answer3: 'What is a catchy tune?',
			answer4: 'What is something that doesn\'t make sense to me?',
			correct: 2,
			points: 200
		},
		clue2: {
			clueText: 'In the context of programming, they don\'t die, they multiply!',
			answer1: 'What are features?',
			answer2: 'What are bugs?',
			answer3: 'What are chores?',
			answer4: 'What are breakpoints?',
			correct: 2,
			points: 400
		},
		clue3: {
			clueText: 'Regina George would NOT be happy about this GitHub term... so stop trying to make it happen!',
			answer1: 'What is fetch?',
			answer2: 'What is merge?',
			answer3: 'What is upstream?',
			answer4: 'What is master?',
			correct: 1,
			points: 600
		},
		clue4: {
			clueText: 'This character has been the hide and seek champion since 1958.',
			answer1: 'What is the comma?',
			answer2: 'What is the closing curly bracket?',
			answer3: 'What is the semicolon?',
			answer4: 'What is the dollar sign?',
			correct: 3,
			points: 800
		},
		clue5: {
			clueText: 'This word is used by programmers when they don\'t want to explain what they just did. Richard Hendricks supposedly wrote one with 10 parentheses.',
			answer1: 'What is an algorithm?',
			answer2: 'What is a nest arrow function?',
			answer3: 'What is a nested loop?',
			answer4: 'What is a RegExp?',
			correct: 1,
			points: 1000
		},
	}
}
