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
// Variable that stores correct Answers
var correctAnswers;
// Variable that stores wrong answers
var wrongAnswers;
// Start button function
$('.start').click(function(start) {
	
	console.log("start button clicked!")
	// sets the interval to 1 sec and calls the decrease function
	// removes start button
	$('.start').remove();
		// displays first question
		
		if (triviaQuestions = triviaQuestions){
			
			$('.trivia-question').append(triviaQuestions[0]);
			//Display correct answer and wrong answers - buttons 
			// Correct Answer is Plott Hound
			$('.answer-options').append("<button class='wrong'>" + "Border Collie" + "</button>");
			$('.answer-options').append("<button class='correct'>" + "Plott Hound" + "</button>");
			$('.answer-options').append("<button class='wrong'>" + "Irish Wolfhound" + "</button>");
			$('.answer-options').append("<button class='wrong'>" + "American Foxhound" + "</button>");

			$('.correct').click(function(){
				$('.time-left').html("You guessed Correctly!");
				correctAnswers++;
			});
			$('.wrong').click(function(){
				$('.time-left').html("You guessed Incorrectly! The correct Answer is Plott Hound.");
				wrongAnswers++;
			});

			intervalId = setInterval(decrease, 1000);
			// create function to decrease the timer by 1 every second
		function decrease() {

// decrease second by 1
			seconds--;
			// show the seconds in the div with class time-left
			$('.time-left').html("<h3>" + "Time Remaining: " + seconds + "</h3>");
			

// When seconds left hits 0, show Times Up! in div with class time-left
		if (seconds <= 0){
			$('.time-left').html("<h3>Times Up!</h3>");
			// resets the interalId variable
			clearInterval(intervalId);
		}


// On click of correct answer - display you are correct!

// Reset Timer

//Next question
	}
		
		}

});
