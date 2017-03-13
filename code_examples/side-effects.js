function listUserActivities(name, activities) {
  for (var i=0; i<=activities.length; i++) {
    activities[i] = name + " likes to " + activities[i] // Bad. Changes activities (Arrays and Objects are passed by reference in JS).
  }
  return activities;
}

function listUserActivities(name, activities) {
  var formattedActivities = []
  for (var i=0; i<=activities.length; i++) {
    formattedActivities[i] = name + " likes to " + activities[i] // Better. Returns new value, does not alter passed in array.
  }
  return formattedActivities;
}

// Could have used .map above to be more efficient.
