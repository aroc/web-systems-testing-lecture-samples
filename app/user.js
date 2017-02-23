class User {

  constructor (name) {
    this.name = name;
  }

  getName () {
    return this.name;
  }

  setName (newName) {
    this.name = newName;
  }

}

module.exports = User;
