function getFriends(userId, callback) {
  var formatFriendName = function(name) { // Can't test this!!
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  FacebookSDK.getFriends(userId, function(friends){
    for (var i=0; i<= friends.length; i++) {
      friends[i] = formatFriendName(friends[i]);
    }
    callback(friends);
  })
}

// Better! We can test this.
function formatFriendName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function getFriends(userId, callback) {
  FacebookSDK.getFriends(userId, function(friends){
    for (var i=0; i<= friends.length; i++) {
      friends[i] = formatFriendName(friends[i]);
    }
    callback(friends);
  })
}
