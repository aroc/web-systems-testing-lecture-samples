function badSignupUser(email, password, name, done) {
  var user = new User({ email: email, password: password });
  user.save(function(user){
    var project = new Project({
      name: "Your first project",
      user_id: user.id
    });
    project.save(function(){
      var email = new Mailer.Email(user.email);
      var emailContent = "Hey "+user.name+",\n"
                         + "Welcome to our app!\n"
                         + "Have a great day.\n";
      email.send(emailContent, function(){
        facebook.getFriends(user.email, function(friendsList){
          var filteredFriends = friendsList.filter(function(friend) {
            return friend.isActive;
          });
          user.friends = filteredFriends;
          user.save(function(){
            var trackingData = { email: user.email, name: user.name };
            analytics.track('New User Signed Up', trackingData, function(){
              loginUser(user, done);
            });
          });
        });
      });
    });
  });
}

function betterSignupUser(email, password, name, done) {
  var user = new User({ email: email, password: password });
  user.save(function(user){
    createUserProject(user, function(project){
      sendWelcomeEmail(user, function(){
        saveUsersFBFriends(user, function(){
          var trackingData = { email: user.email, name: user.name };
          analytics.track('New User Signed Up', trackingData, function(){
            loginUser(user, done);
          });
        });
      });
    });
  });
}

function createUserProject(user, callback) {
  var project = new Project({
    name: "Your first project",
    user_id: user.id,
    first_project: true
  });
  project.save(callback);
}

function sendWelcomeEmail(user, callback) {
  var email = new Mailer.Email(user.email);
  var emailContent = "Hey "+user.name+",\n"
                     + "Welcome to our app!\n"
                     + "Have a great day.\n";
  email.send(emailContent, callback);
}

function saveUsersFBFriends(user, callback) {
  facebook.getFriends(user.email, function(friendsList){
    var filteredFriends = friendsList.filter(function(friend) {
      return friend.isActive;
    });
    user.friends = filteredFriends;
    user.save(callback);
  });
}
