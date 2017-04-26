// Variable that holds the number we want to count down from
var seconds = 60; 
// Variable that holds the Interval ID when we execute the "run" function
var intervalId; 
// Variable that holds trivia questions
var triviaQuestions = ['1. The state dog of North Carolina is what breed?', 
'2. Chewbacca, the hairy Wookiee in the Star Wars movies, was inspired by George Lucas what?', 
'3. Every known dog breed except this one has a pink tongue. What is this breed?', 
'4. What dog breed does not bark, but does make yodeling noises?', 
'5. What dog breed has a water resistant coat and webbed feet', 
'6.What is Corgi Welsh for?', '7. What dog breed has 6 toes on each foot?']; 
// Variable that stores correct Answers
var correctAnswers = 0;
// Variable that stores wrong answers
var wrongAnswers = 0;
// Start button function
$('.start').click(function(start, reset) {
	

	// removes start button
	$('.start').remove();
		// displays first question and answer choices
		
		$('.questionOne').append(triviaQuestions[0]);
		$('.questionOne').append("<br>" + "<br>" + "<input type='radio' name='questionOne' class='wrong'>" + " Border Collie " + "</input>");
		$('.questionOne').append("<input type='radio' name='questionOne' class='correct'>" + " Plott Hound " + "</input>");
		$('.questionOne').append("<input type='radio' name='questionOne' class='wrong'>" + " Irish Wolfhound " + "</input>");
		$('.questionOne').append("<input type='radio' name='questionOne'class='wrong'>" + " American Foxhound " + "</input>" + "<br>");

		// displays second question  and answer choices
		$('.questionTwo').append(triviaQuestions[1]);
		$('.questionTwo').append("<br>" + "<br>" + "<input type='radio' name='questionTwo' class='wrong'>" + " Afghan Hound " + "</input>");
		$('.questionTwo').append("<input type='radio' name='questionTwo' class='wrong'>" + " Old English Sheepdog " + "</input>");
		$('.questionTwo').append("<input type='radio' name='questionTwo' class='wrong'>" + " Shih Tzu " + "</input>");
		$('.questionTwo').append("<input type='radio' name='questionTwo' class='correct'>" + " Alaskan Malamute " + "</input>" + "<br>");

		// displays third question and answer choices
		$('.questionThree').append(triviaQuestions[2]);
		$('.questionThree').append("<br>" + "<br>" + "<input type='radio' name='questionThree' class='correct'>" + " Chow Chow " + "</input>");
		$('.questionThree').append("<input type='radio' name='questionThree' class='wrong'>" + " Chihuahua " + "</input>");
		$('.questionThree').append("<input type='radio' name='questionThree' class='wrong'>" + " French Bulldog " + "</input>");
		$('.questionThree').append("<input type='radio' name='questionThree' class='wrong'>" + " Maltese " + "</input>" + "<br>");

		// displays fourth question and answer choices
		$('.questionFour').append(triviaQuestions[3]);
		$('.questionFour').append("<br>" + "<br>" + "<input type='radio' name='questionFour' class='wrong'>" + " French Bulldog " + "</input>");
		$('.questionFour').append("<input type='radio' name='questionFour' class='correct'>" + " Basenji " + "</input>");
		$('.questionFour').append("<input type='radio' name='questionFour' class='wrong'>" + " Alaskan Malamute " + "</input>");
		$('.questionFour').append("<input type='radio' name='questionFour' class='wrong'>" + " Australian Shepherd " + "</input>" + "<br>");
		// displays fifth question and answer choices
		$('.questionFive').append(triviaQuestions[4]);
		$('.questionFive').append("<br>" + "<br>" + "<input type='radio' name='questionFive' class='wrong'>" + " Italian Greyhound " + "</input>");
		$('.questionFive').append("<input type='radio' name='questionFive' class='wrong'>" + " Basenji " + "</input>");
		$('.questionFive').append("<input type='radio' name='questionFive' class='wrong'>" + " French Bulldog " + "</input>");
		$('.questionFive').append("<input type='radio' name='questionFive' class='correct'>" + " Newfoundland " + "</input>" + "<br>");
		// displays sixth question and answer choices
		$('.questionSix').append(triviaQuestions[5]);
		$('.questionSix').append("<br>" + "<br>" + "<input type='radio' name='questionSix' class='wrong'>" + " Big ears " + "</input>");
		$('.questionSix').append("<input type='radio' name='questionSix' class='correct'>" + " Dwarf dog " + "</input>");
		$('.questionSix').append("<input type='radio' name='questionSix' class='wrong'>" + " Little legs " + "</input>");
		$('.questionSix').append("<input type='radio' name='questionSix' class='wrong'>" + " Fluffy dog " + "</input>" + "<br>");
		// displays seventh question and answer choices
		$('.questionSeven').append(triviaQuestions[6]);
		$('.questionSeven').append("<br>" + "<br>" + "<input type='radio' name='questionSeven' class='wrong'>" + " Toy Fox Terrier " + "</input>");
		$('.questionSeven').append("<input type='radio' name='questionSeven' class='wrong'>" + " Basenji " + "</input>");
		$('.questionSeven').append("<input type='radio' name='questionSeven' class='wrong'>" + " Golden Retriever " + "</input>");
		$('.questionSeven').append("<input type='radio' name='questionSeven' class='correct'>" + " Norwegian Lundehund " + "</input>" + "<br>");
		// create done button once game starts
		$('.done').html("<button class='btn btn-info btn-lg'>" + "Done" + "</button>");

	// creates click for done button 
	$('.done').click(function(){
		$('.time-left').html("<h3>Your Score: </h3>");
		// Show answers when you click the done button 
		$('.tallies').html("Correct Answers: " + correctAnswers + "<br>" + "Not Correct Answers: " + wrongAnswers);
		// resets the timer
		clearInterval(intervalId);
		// Removes all questions when you click the Done button
		$('.questionOne').remove();
		$('.questionTwo').remove();
		$('.questionThree').remove();
		$('.questionFour').remove();
		$('.questionFive').remove();
		$('.questionSix').remove();
		$('.questionSeven').remove();
		$('.done').remove();
		$('.reset').html("<button class='btn btn-info btn-lg'>" + "Reset" + "</button>");

	});
	// sets the interval to 1 sec and calls the decrease function
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
			// Show answers when you click the done button 
			$('.tallies').html("Correct Answers: " + correctAnswers + "<br>" + "Not Correct Answers: " + wrongAnswers);
			// removes all the questions from screen when you click done
			$('.questionOne').remove();
			$('.questionTwo').remove();
			$('.questionThree').remove();
			$('.questionFour').remove();
			$('.questionFive').remove();
			$('.questionSix').remove();
			$('.questionSeven').remove();
			// resets the interalId variable
			clearInterval(intervalId);
			$('.done').remove();
			$('.reset').html("<button class='btn btn-info btn-lg'>" + "Reset" + "</button>");
		}
	}

// calculates how many questions the player guessed correctly 
$('.correct').click(function(){
	if ($('.correct' == true)){
		correctAnswers++;
	}
});
// calculates how many questions the player guessed incorrectly 
$('.wrong').click(function(){
	if ($('.wrong' == true)){
		wrongAnswers++;
	}
});
// resets the screen to the original way it was
$('.reset').click(function(){
	location.reload();
});
});
