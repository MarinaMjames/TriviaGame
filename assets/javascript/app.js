// Variable that holds the number we want to count down from
var seconds = 30; 
// Variable that holds the Interval ID when we execute the "run" function
var intervalId; 
// Variable that holds trivia questions
var triviaQuestions = ['The state dog of North Carolina is what breed?', 
'Chewbacca, the hairy Wookiee in the Star Wars movies, was inspired by George Lucas what?', 
'Every known dog breed except this one has a pink tongue. What is this breed?', 
'What dog breed does not bark, but does make yodeling noises?', 
'What dog breed has a water resistant coat and webbed feet', 
'What is Corgi Welsh for?', 'What dog breed has 6 toes on each foot?']; 

// Start button function
$('.start').click(function() {
	console.log("start button clicked!")
	intervalId = setInterval(decrease, 1000);
		function decrease() {
// decrease second by 1
			seconds--;
			// show the seconds in the div with class time-left
			$('.time-left').html("<h3>" + "Time Remaining: " + seconds + "</h3>");

// When seconds left hits 0, show Times Up! in div with class time-left
		if (seconds <= 0){
			stop();
			$('.time-left').html("<h3>Times Up!</h3>");
			clearInterval(intervalId);
		}
	}

// Create for loop that goes through triviaQuestions variable

// Display Question on screen

//Display correct answer and wrong answers - buttons 

// On click of correct answer - display you are correct!

// Reset Timer

//Next question
});
