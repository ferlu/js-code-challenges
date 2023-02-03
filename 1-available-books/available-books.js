const Book = require('./Book');

const PedroParamo = new Book('Pedro Páramo', 'Juan Rulfo', 9685208557, 20);
console.log(PedroParamo.getAvailability());
PedroParamo.sell(11);
console.log(PedroParamo.getAvailability());
PedroParamo.restock(10);
console.log(PedroParamo.getAvailability());
