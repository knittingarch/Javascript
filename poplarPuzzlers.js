// A script that treats an array of functions like a queue by passing the result of each function into the next until the Queue is empty.
// by Sarah Dawson

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here

var applyAndEmpty = function(input, queue){
  // Create length variable outside of loop to preserve the length of the cue as it decreases
  var length = queue.length;
  // Loop through the queue	
  for (var i = 0; i < length; i++) {
    // Pop off the next function in queue and call it immediately, then pass in input as the function's argument; assign back to input
    input = queue.shift()(input);
  }
  	return input;
};


// call the function passing in the arguments set up previously and alert the result    
alert(applyAndEmpty(start, puzzlers));  