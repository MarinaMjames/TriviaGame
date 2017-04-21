// GLOBAL VARIABLES
// Variable that holds the number we want to count down from
var seconds = 30; 
// Variable that holds the Interval ID when we execute the "run" function
var intervalId; 

// Start button function
$('.start').click(function() {
	console.log("start button clicked!")
});
// Run function starts the timer that decreases by 1 every second
    function run() {
		intervalId = setInterval(decrease, 1000);
	}

// Decrement function 
	function decrease() {
	// decrease second by 1
		seconds--;
	// show the seconds in the div with class time-left
	$('.time-left').html("<h3>" + "Time Remaining: " + seconds + "</h3>");

// When seconds left hits 0, show Times Up! in div with class time-left
		if (seconds === 0){
			stop();
			$('.time-left').html("<h3>Times Up!</h3>");
		}
	}
// Stop function that resets timer
	function stop(){
		clearInterval(intervalId);
	}

// Execute run function
run();
