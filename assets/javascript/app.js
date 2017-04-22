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
		
		$('.questionOne').append(triviaQuestions[0]);
		$('.questionOne').append("<br>" + "<input type='radio' name='questionOne' class='wrong'>" + " Border Collie" + "</input>");
		$('.questionOne').append("<input type='radio' name='questionOne' class='correct'>" + " Plott Hound" + "</input>");
		$('.questionOne').append("<input type='radio' name='questionOne' class='wrong'>" + " Irish Wolfhound" + "</input>");
		$('.questionOne').append("<input type='radio' name='questionOne' class='wrong'>" + " American Foxhound" + "</input>" + "<br>");
				$('.correct').click(function(){
					correctAnswers++;
				});
				$('.wrong').click(function(){
					wrongAnswers++;
				});

		$('.questionTwo').append(triviaQuestions[1]);
		$('.questionTwo').append("<br>" + "<input type='radio' name='questionTwo' class='wrong'>" + " Afghan Hound" + "</input>");
		$('.questionTwo').append("<input type='radio' name='questionTwo' class='wrong'>" + " Old English Sheepdog" + "</input>");
		$('.questionTwo').append("<input type='radio' name='questionTwo' class='wrong'>" + " Shih Tzu" + "</input>");
		$('.questionTwo').append("<input type='radio' name='questionTwo' class='correct'>" + " Alaskan Malamute" + "</input>" + "<br>");
				$('.correct').click(function(){
					correctAnswers++;
				});
				$('.wrong').click(function(){
					wrongAnswers++;
				});

		$('.questionThree').append(triviaQuestions[2]);
		$('.questionThree').append("<br>" + "<input type='radio' name='questionThree' class='correct'>" + " Chow Chow" + "</input>");
		$('.questionThree').append("<input type='radio' name='questionThree' class='wrong'>" + " Chihuahua" + "</input>");
		$('.questionThree').append("<input type='radio' name='questionThree' class='wrong'>" + " French Bulldog" + "</input>");
		$('.questionThree').append("<input type='radio' name='questionThree' class='wrong'>" + " Maltese" + "</input>" + "<br>");
				$('.correct').click(function(){
					correctAnswers++;
				});
				$('.wrong').click(function(){
					wrongAnswers++;
				});

		$('.questionFour').append(triviaQuestions[3]);
		$('.questionFour').append("<br>" + "<input type='radio' name='questionFour' class='wrong'>" + " French Bulldog" + "</input>");
		$('.questionFour').append("<input type='radio' name='questionFour' class='correct'>" + " Basenji" + "</input>");
		$('.questionFour').append("<input type='radio' name='questionFour' class='wrong'>" + " Alaskan Malamute" + "</input>");
		$('.questionFour').append("<input type='radio' name='questionFour' class='wrong'>" + " Australian Shepherd" + "</input>" + "<br>");
				$('.correct').click(function(){
					correctAnswers++;
				});
				$('.wrong').click(function(){
					wrongAnswers++;
				});
		$('.questionFive').append(triviaQuestions[4]);
		$('.questionFive').append("<br>" + "<input type='radio' name='questionFive' class='wrong'>" + " Italian Greyhound" + "</input>");
		$('.questionFive').append("<input type='radio' name='questionFive' class='wrong'>" + " Basenji" + "</input>");
		$('.questionFive').append("<input type='radio' name='questionFive' class='wrong'>" + " French Bulldog" + "</input>");
		$('.questionFive').append("<input type='radio' name='questionFive' class='correct'>" + " Newfoundland" + "</input>" + "<br>");
				$('.correct').click(function(){
					correctAnswers++;
				});
				$('.wrong').click(function(){
					wrongAnswers++;
				});
		$('.questionSix').append(triviaQuestions[5]);
		$('.questionSix').append("<br>" + "<input type='radio' name='questionSix' class='wrong'>" + " Big ears" + "</input>");
		$('.questionSix').append("<input type='radio' name='questionSix' class='correct'>" + " Dwarf dog" + "</input>");
		$('.questionSix').append("<input type='radio' name='questionSix' class='wrong'>" + " Little legs" + "</input>");
		$('.questionSix').append("<input type='radio' name='questionSix' class='wrong'>" + " Fluffy dog" + "</input>" + "<br>");
				$('.correct').click(function(){
					correctAnswers++;
				});
				$('.wrong').click(function(){
					wrongAnswers++;
				});
						$('.questionSeven').append(triviaQuestions[6]);
		$('.questionSeven').append("<br>" + "<input type='radio' name='questionSeven' class='wrong'>" + " Toy Fox Terrier" + "</input>");
		$('.questionSeven').append("<input type='radio' name='questionSeven' class='wrong'>" + " Basenji" + "</input>");
		$('.questionSeven').append("<input type='radio' name='questionSeven' class='wrong'>" + " Golden Retriever" + "</input>");
		$('.questionSeven').append("<input type='radio' name='questionSeven' class='correct'>" + " Norwegian Lundehund" + "</input>" + "<br>");
				$('.correct').click(function(){
					correctAnswers++;
				});
				$('.wrong').click(function(){
					wrongAnswers++;
				});

	$('.done').click(function(){

	});

		// if (triviaQuestions = triviaQuestions){
			
			// $('.trivia-question').append(triviaQuestions[0]);
			// //Display correct answer and wrong answers - buttons 
			// // Correct Answer is Plott Hound
			// $('.answer-options').append("<button class='wrong'>" + "Border Collie" + "</button>");
			// $('.answer-options').append("<button class='correct'>" + "Plott Hound" + "</button>");
			// $('.answer-options').append("<button class='wrong'>" + "Irish Wolfhound" + "</button>");
			// $('.answer-options').append("<button class='wrong'>" + "American Foxhound" + "</button>");

			// $('.correct').click(function(){
			// 	$('.time-left').html("You guessed Correctly!");
			// 	correctAnswers++;
			// });
			// $('.wrong').click(function(){
			// 	$('.time-left').html("You guessed Incorrectly! The correct Answer is Plott Hound.");
			// 	wrongAnswers++;
			// });

			// $('.trivia-question').append(triviaQuestions[1]);


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
			$('.questionOne').remove();
			$('.questionTwo').remove();
			$('.questionThree').remove();
			$('.questionFour').remove();
			$('.questionFive').remove();
			$('.questionSix').remove();
			$('.questionSeven').remove();
			// resets the interalId variable
			clearInterval(intervalId);
		}


// On click of correct answer - display you are correct!

// Reset Timer

//Next question
	}
		
		// }

});
