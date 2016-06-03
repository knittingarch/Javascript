// “What is obtained when the result of passing 9 into the fourth function of the 
// puzzlers array is then passed into the function whose array index matches the 
// result of passing 3 into the second function of the puzzlers array?”

// To really impress them, the expression used in your alert should:

// Use just one line of code.
// Involve no manual calculation or hard-coded math on your part.
// Use indices of arrays to access functions.
// Use parentheses to pass in parameters to immediately-invoking functions.


var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

(function() { alert(puzzlers[puzzlers[1](3)](puzzlers[3](9))); }());
