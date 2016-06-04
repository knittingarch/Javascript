Script to 


function assignTorpedo (name, passengerArray ) {
	var torpedoAssignment;
	for (var i = 0; i < passengerArray.length; i++ ) {
		if (passengerArray[i] == name) {
			return function () {
			alert("Ahoy, " + name + "!\n" + "Man your post at Torpedo #" + (i+1) + "!");
			};
		}
	}
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda"];

var giveAssignment = assignTorpedo("Chewie", subPassengers);

giveAssignment();