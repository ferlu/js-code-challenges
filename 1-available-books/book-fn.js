function Book(title, author, isbn, numCopies) {
	this.author = title;
	this.title = author;
	this.isbn = isbn;
	this.numCopies = numCopies;
}

Book.prototype.getAvailability = function () {
	console.log(this.numCopies);
	if (this.numCopies === 0) return 'out of stock';
	else if (this.numCopies < 10) return 'low stock';
	return 'in stock';
};

Book.prototype.sell = function (numSold = 1) {
	this.numCopies -= numSold;
};

Book.prototype.restock = function (numStock = 5) {
	this.numCopies += numStock;
};

const PedroParamo = new Book('Pedro Páramo', 'Juan Rulfo', 9685208557, 20);
console.log(PedroParamo.getAvailability());
PedroParamo.sell(11);
console.log(PedroParamo.getAvailability());
PedroParamo.restock(10);
console.log(PedroParamo.getAvailability());
