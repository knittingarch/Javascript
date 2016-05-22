// A program that calculates the volume and surface area of a sphere
// by Sarah Dawson


function sphere() {
	alert("This program will caluclate the volume and surface area of a sphere with your help!");
	var radius = prompt("Please enter the radius of your circle:", "");
	var volume = 4 / 3 * Math.PI * Math.pow(radius, 3);
	var area = 4 * Math.PI * Math.pow(radius, 2);
	alert("The volume of your circle is " + volume.toFixed(2) + ".");
	alert("The area of your circle is " + area.toFixed(2) + ".");
}


// ORIGINAL Python Code
// import math

// def main():
// 	print "This program will caluclate the volume and surface area of a sphere with your help!"
// 	r = eval(raw_input("Please enter the radius of your sphere: "))
// 	volume = 4.0/3.0 * math.pi * r**3
// 	area = 4 * math.pi * r**2
// 	print volume
// 	print area

// main()