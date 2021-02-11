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
			clueText: '&lt;link&gt;, &ltimg&gt, &lthr&gt, &ltbr&gt... to name a few',
			correct: 'B',
			answerA: 'What are elements required to render a successful document?',
			answerB: 'What are self-closing tags?',
			answerC: 'What are elements that require alt-text?',
			answerD: 'What are elements that should be included in a &lt;div&gt;?'


		},
		clue2: {
			clueText: 'This HTML element attribute is used for something that probably happens once or twice.',
			correct: 'D',
			answerA: 'What is an aside?',
			answerB: 'What is unique?',
			answerC: 'What is an id?',
			answerD: 'What is a class?'


		},
		clue3: {
			clueText: 'This HTML tag allows a hyperlink.',
			correct: 'A',
			answerA: 'What is &lt;a&gt;?',
			answerB: 'What is &lt;link&gt;',
			answerC: 'What is &lt;src&gt;?',
			answerD: 'What is &lt;href&gt;?'


		},
		clue4: {
			clueText: 'In HTML, a table is made of these elements.',
			correct: 'C',
			answerA: 'What is &lt;table&gt;, &lt;row&gt;, &lt;column&gt;?',
			answerB: 'What is &lt;tb&gt;, &lt;td&gt;?',
			answerC: 'What is &lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;?',
			answerD: 'What is &lt;table&gt;, &lt;h1&gt;, &lt;section&gt;?'


		},
		clue5: {
			clueText: 'This element is an inline container used to mark up only part of a text.',
			correct: 'C',
			answerA: 'What is &lt;aside&gt;?',
			answerB: 'What is &lt;section&gt;?',
			answerC: 'What is &lt;span&gt;?',
			answerD: 'What is &lt;style&gt;?'


		}
	},
	// css category
	cluenames2: {
		cluenamesLabel: 'CSS',
		clue1: {
			clueText: 'Padding, Border, Margin',
			correct: 'A',
			answerA: 'What is the Box Model?',
			answerB: 'What are attributes required for every selector?',
			answerC: 'What are properties considered necessary for Flexbox?',
			answerD: 'What are attributes that all mean the same thing?'


		},
		clue2: {
			clueText: 'This CSS property allows you to identify which type of font you\'d like to use.',
			correct: 'D',
			answerA: 'What is font?',
			answerB: 'What is font-style?',
			answerC: 'What is text?',
			answerD: 'What is font-family?'


		},
		clue3: {
			clueText: 'This CSS property improves a browser\'s handling of small windows.',
			correct: 'C',
			answerA: 'What is width?',
			answerB: 'What is position?',
			answerC: 'What is max-width?',
			answerD: 'What is display?'


		},
		clue4: {
			clueText: 'The opacity property specifies the transparency of an element. It takes one of these values.',
			correct: 'A',
			answerA: 'What are numbers between 0.0 - 1.0?',
			answerB: 'What is any integer?',
			answerC: 'What are positive numbers only?',
			answerD: 'What are numbers between 0 - 100?'


		},
		clue5: {
			clueText: 'This type of display allows you to set the width, height, margin, and padding of an element, while allowing that element to sit next to other elements.',
			correct: 'A',
			answerA: 'What is inline-block?',
			answerB: 'What is block?',
			answerC: 'What is grid?',
			answerD: 'What is flex?'

		},
	},
	// javascript category
	cluenames3: {
		cluenamesLabel: 'JavaScript',
		clue1: {
			clueText: '!false',
			correct: 'C',
			answerA: 'What is null?',
			answerB: 'What is false?',
			answerC: 'What is true?',
			answerD: 'What is the incorrect way to use a boolean?'


		},
		clue2: {
			clueText: 'This type of operator description let\'s you determine whether there\'s a remainder.',
			correct: 'A',
			answerA: 'What is the modulus?',
			answerB: 'What is division?',
			answerC: 'What is decrement?',
			answerD: 'What is combining division and subtraction?'


		},
		clue3: {
			clueText: 'This type of loop is a great choice to use if you already know how many times you need to loop through something.',
			correct: 'B',
			answerA: 'What is a For In loop?',
			answerB: 'What is a For loop?',
			answerC: 'What is a While loop?',
			answerD: 'What is a For Of loop?'


		},
		clue4: {
			clueText: 'This JavaScript object can be used to hold multiple objects, including itself.',
			correct: 'A',
			answerA: 'What is an array?',
			answerB: 'What is an object key?',
			answerC: 'What are key value pairs?',
			answerD: 'What is an object literal?'


		},
		clue5: {
			clueText: 'In the context of the most recent version of JavaScript, this variable declaration allows you to redeclare the variable later.',
			correct: 'C',
			answerA: 'What is var?',
			answerB: 'What is const?',
			answerC: 'What is let?',
			answerD: 'What are both const and let?'


		},
	},
	// cli category
	cluenames4: {
		cluenamesLabel: 'CLI',
		clue1: {
			clueText: 'I wish I knew all of the contents of this folder... I think something\'s hiding! There\'s a command for this.',
			correct: 'A',
			answerA: 'What is ls -a',
			answerB: 'What is ls?',
			answerC: 'What is ls -l?',
			answerD: 'What is ls ~?'


		},
		clue2: {
			clueText: 'This command removes a directory and everything in it.',
			correct: 'D',
			answerA: 'What is cp -rm?',
			answerB: 'What is rm?',
			answerC: 'What is rmdir?',
			answerD: 'What is rm -r?'


		},
		clue3: {
			clueText: 'This command will print your file.',
			correct: 'B',
			answerA: 'What is prnt?',
			answerB: 'What is cat?',
			answerC: 'What is touch-print?',
			answerD: 'What is print &lt;file&gt;?'


		},
		clue4: {
			clueText: 'This command moves a file or folder into another folder that\'s in the same directory.',
			correct: 'A',
			answerA: 'What is mv?',
			answerB: 'What is cp?',
			answerC: 'What is mvdir?',
			answerD: 'What is mv -dir?'


		},
		clue5: {
			clueText: 'To infinity and beyond! This command stops a program from running when you\'ve written an infinite loop.',
			correct: 'A',
			answerA: 'What is CTRL C?',
			answerB: 'What is CTRL ALT DELETE?',
			answerC: 'What is CMD F?',
			answerD: 'What is ESC?'


		},
	},
	// github category
	cluenames5: {
		cluenamesLabel: 'GitHub',
		clue1: {
			clueText: 'I can\'t remember if I added everything that I wanted to commit to staging. There\'s a command for this.',
			correct: 'B',
			answerA: 'What is git log?',
			answerB: 'What is git status?',
			answerC: 'What is git help?',
			answerD: 'What is git init?'


		},
		clue2: {
			clueText: 'This is one way to turn an existing directory into a Git repository.',
			correct: 'A',
			answerA: 'What is git init?',
			answerB: 'What is git --setup &lt;file&gt;',
			answerC: 'What is git clone (URL)?',
			answerD: 'What is git log?'


		},
		clue3: {
			clueText: 'This command will grab all the commits from the remote branch and merge them into your own branch.',
			correct: 'D',
			answerA: 'What is push?',
			answerB: 'What is fetch?',
			answerC: 'What is merge?',
			answerD: 'What is pull?'


		},
		clue4: {
			clueText: 'This command is important when considering version control.',
			correct: 'C',
			answerA: 'What is git show?',
			answerB: 'What is git config?',
			answerC: 'What is git commit?',
			answerD: 'What is git push?'


		},
		clue5: {
			clueText: 'This request alerts the original owner of a repository that you\'ve made changes to their code that might be beneficial.',
			correct: 'C',
			answerA: 'What is a merge request?',
			answerB: 'What is a fork request?',
			answerC: 'What is a pull request?',
			answerD: 'What is a commit request?'


		},
	},
	// lolz category
	cluenames6: {
		cluenamesLabel: 'LOLZ',
		clue1: {
			clueText: 'In the context of programming... Rubber ducky, you\'re the one. You make coding lots of fun!',
			correct: 'B',
			answerA: 'What is a song from Rugrats?',
			answerB: 'What is Rubber Duck coding?',
			answerC: 'What is a catchy tune?',
			answerD: 'What is something that doesn\'t make sense to me?'


		},
		clue2: {
			clueText: 'In the context of programming, they don\'t die, they multiply!',
			correct: 'B',
			answerA: 'What are features?',
			answerB: 'What are bugs?',
			answerC: 'What are chores?',
			answerD: 'What are breakpoints?'


		},
		clue3: {
			clueText: 'Regina George would NOT be happy about this GitHub term... so stop trying to make it happen!',
			correct: 'A',
			answerA: 'What is fetch?',
			answerB: 'What is merge?',
			answerC: 'What is upstream?',
			answerD: 'What is master?'


		},
		clue4: {
			clueText: 'This character has been the hide and seek champion since 1958.',
			correct: 'C',
			answerA: 'What is the comma?',
			answerB: 'What is the closing curly bracket?',
			answerC: 'What is the semicolon?',
			answerD: 'What is the dollar sign?'


		},
		clue5: {
			clueText: 'This word is used by programmers when they don\'t want to explain what they just did. Richard Hendricks supposedly wrote one with 10 parentheses.',
			correct: 'A',
			answerA: 'What is an algorithm?',
			answerB: 'What is a nest arrow function?',
			answerC: 'What is a nested loop?',
			answerD: 'What is a RegExp?'


		},
	}
}
