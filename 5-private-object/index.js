const User = require('./User');

const myUser = new User('ferlu', '123abc', 26);
console.log(myUser.age);
console.log(myUser.username);
console.log(myUser.password);
