//A program to calculate the distance in miles to a lightning strike based on the flash of light and sound of the strike
//by Sarah Dawson

function strike() {
	alert("Welcome to the Lightning Tracker!");
	var seconds = prompt("How long of a delay (in seconds) was there between the flash and the boom? ", "");
	var totalFeet = seconds * 1100;
	var inMiles = (totalFeet / 5280).toFixed(2);
	alert("If the delay was " + seconds + " then the lightning strike was " + inMiles + " miles away!");
}



// ORIGINAL Python Code

// def main():
// 	print "Welcome to the Lightning Tracker!"
// 	seconds = eval(raw_input("How long of a delay (in seconds) was there between the flash and the boom? "))
// 	total_feet = seconds * 1100
// 	in_miles = round((total_feet / 5280.0), 2)
// 	print "If the delay was", seconds, "then the lightning strike was", in_miles, "miles away!"

// main()	