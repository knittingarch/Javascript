// A program that accepts an exam score between 0-100 and asigns a letter grade based on 10-pt scale (90-100 = A, etc)
// This program uses list indexing, although a simple if/elif/else statement with integers would work as well.
// by Sarah Dawson


var examScore = function() {
	alert("This program will convert your numerical grade into a letter grade.");

	var grade = prompt("Please enter your grade here.");

	var numbers = [];

	for (var i = 0; i < 101; i++) {
		numbers.push(i);
	}

	if (grade >= numbers[90]) {
		return(alert("You earned an A."));
	} else if (grade >= numbers[80]) {
		return(alert("You earned a B."));
	} else if (grade >= numbers[70]) {
		return(alert("You earned a C."));
	} else if (grade >= numbers[60]) {
		return(alert("You earned a D."));
	} else {
		return(alert("You earned an F."));
	}
};


// ORIGINAL Python Code
//def main():
//
//	print 'This program will convert your numerical grade into a letter grade. \n'
//
//	grade = eval(raw_input('Please enter your grade here: '))
//	numbers = []
//
//	for i in range(101):
//		numbers.append(i)
//
//	if grade >= numbers[90]:
//		print 'You earned an A.'
//	elif grade >= numbers[80]:
//		print 'You earned an B.'
//	elif grade >= numbers[70]:
//		print 'You earned an C.'
//	elif grade >= numbers[60]:
//		print 'You earned an D.'
//	else:
//		print 'You earned an F.'
//
//main()