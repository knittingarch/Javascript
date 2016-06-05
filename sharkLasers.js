// More practice with closures
// by Sarah Dawson


function assignLaser(shark, sharkList) {
  var stationAssignment;
  for (var i = 0; i < sharkList.length; i++) {
    if (shark == sharkList[i]) {
        return function() { alert("Yo, " + shark + "!\n" + "Visit underwater strapping station " +
              (i + 1) + " for your sweet laser."); }
  }
}

