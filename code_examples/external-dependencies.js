var activities = {
  'writes code',
  'writes more code',
  'snowboard'
};

function listUserActivities(name) {
  for (var i=0; i<=activities.length; i++) { // activities is coming from outside the function. Impossible to control.
    activities[i] = name + " likes to " + activities[i]
  }
  return activities;
}

function listUserActivities(name, activities) { // Better, activities is passed in as an argument. Controllable.
  for (var i=0; i<=activities.length; i++) {
    activities[i] = name + " likes to " + activities[i]
  }
  return activities;
}
