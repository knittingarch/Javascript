// A program to calculate the area of a three-sided triangle
// by Sarah Dawson

function triangleArea(){
	alert("Welcome to the Triangle Area-Finding Machine!");
	var side1 = prompt("Please enter the first side of your triangle in inches.", "");
	var side2 = prompt("Please enter the second side of your triangle in inches.", "");
	var side3 = prompt("Please enter the third side of your triangle in inches.", "");
	var a = parseInt(side1);
	var b = parseInt(side2);
	var c = parseInt(side3);
	var s = (a + b + c) / 2;
	var sides = (s - a) * (s - b) * (s - c);
	var area = Math.sqrt(s * ((s-a) * (s-b) * (s-c)));
	alert("The area of a triangle with " + a + ", " + b + ", and " + c + " as sides, is " + area.toFixed(2) + " inches.");
}



// import math

// def main():
// 	print "Welcome to the Triangle Area-Finding Machine!"
// 	a, b, c = eval(raw_input("Please enter the three sides of your triangle in inches (separated by commas): "))
// 	s = (a + b + c)/2
// 	area = math.sqrt(s * ((s-a) * (s-b) * (s-c)))
// 	rounded_area = round(area, 2)
// 	print "The area of a triangle with", a, b, "and", c, "as lengths, is", rounded_area, "."

// main()