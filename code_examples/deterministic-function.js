// bad, non-deterministic
function getTimeOfDay() {
  var time = new Date(); // Can't control this in the test.
  if (time.getHours() > 18) {
    return "Night";
  }
  if (time.getHours() < 12) {
    return "Morning";
  }
  if (time.getHours() > 12 && time.getHours() < 18) {
    return "Afternoon";
  }
}

// better, determinstic
function getTimeOfDay(time) { // time passed in as argument
  if (time.getHours() > 18) {
    return "Night";
  }
  if (time.getHours() < 12) {
    return "Morning";
  }
  if (time.getHours() > 12 && time.getHours() < 18) {
    return "Afternoon";
  }
}
