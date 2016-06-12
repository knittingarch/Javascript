// To let mother cows rest, the cowboy-devs at the Plains of Prototypes have decided only to breed cows that have not given birth to any calves yet.

// Now they want to add some functionality to the Object prototype itself. They’ve asked you to build two functions, in order:

// First, build a function called noCalvesYet, which will be added to the Object prototype.
// If the object type is a "cow" and also had no calves, the function should return a true value. Otherwise it should return a false value.
// Then, build a function called countForBreeding, which will be added to the Array prototype.
// In countForBreeding start by creating a numToBreed counter variable. The following steps refer to code in countForBreeding.
// Use a for loop to loop through all of the array values. You can use this to refer to the current list.
// Call noCalvesYet(). If it returns true for the current array value, then that means the cows are not moms, and we can increment the numToBreed counter variable.
// After your loop, this function should return the numToBreed count, which represents how many non-mother cows are available within any array.


var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];

var valleyCows = [
  {name: "Danielle", type: "cow", hadCalf: null},
  {name: "Brittany", type: "cow", hadCalf: "Christina"},
  {name: "Jordan", type: "bull", hadCalf: null},
  {name: "Trevor", type: "bull", hadCalf: null},
  {name: "Christina", type: "calf", hadCalf: null},
  {name: "Lucas", type: "bull", hadCalf: null}
];

var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

var badlandsCows = [
  {name: "Voldemort", type: "bull", hadCalf: null},
  {name: "Maleficent", type: "cow", hadCalf: null},
  {name: "Ursula", type: "cow", hadCalf: "Draco"},
  {name: "Draco", type: "calf", hadCalf: null},
  {name: "Joker", type: "bull", hadCalf: null},
  {name: "Chucky", type: "calf", hadCalf: null},
  {name: "Samara", type: "cow", hadCalf: "Chucky"}
];

Object.prototype.noCalvesYet = function() {
  // "this" is the object 
  if (this.type == "cow" && this.hadCalf == null) {
      return true;
      } else {
      return false;
    }
};

Array.prototype.countForBreeding = function() {
  var numToBreed = 0;
  for (var i = 0; i < this.length; i++) {
    // "this" is the array 
    if (this[i].noCalvesYet() == true) {
      numToBreed++;
    }
  }
  return numToBreed;
};

var numPriorityCows = (canyonCows.countForBreeding() + valleyCows.countForBreeding() + 
  forestCows.countForBreeding() + badlandsCows.countForBreeding());

alert("Herd-merger has indicated " + numPriorityCows + " cows of top breeding priority.");

