// Variable that holds the number we want to count down from
var seconds = 30; 
// Variable that holds the Interval ID when we execute the "run" function
var intervalId; 

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
		if (seconds === 0){
			stop();
			$('.time-left').html("<h3>Times Up!</h3>");
			clearInterval(intervalId);
		}
	}
});




// The state dog of North Carolina is what breed?
// Chewbacca, the hairy Wookiee in the Star Wars movies, was inspired by George Lucas' what?
// Every known dog breed except this one has a pink tongue. What is this breed?
// What dog breed does not bark, but does make yodeling noises?
// s it a duck…or a dog? The Newfoundland breed has a water resistant coat and webbed feet. This dog was originally bred to help haul nets for fishermen and rescuing people at risk of drowning.
// Corgi is Welsh for "dwarf dog."
// The Norwegian Lundehund is the only dog that has six toes on each foot!