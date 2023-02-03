class Book {
	constructor(title, author, isbn, numCopies) {
		this.author = title;
		this.title = author;
		this.isbn = isbn;
		this.numCopies = numCopies;
	}

	getAvailability() {
		console.log(this.numCopies);
		if (this.numCopies === 0) return 'out of stock';
		else if (this.numCopies < 10) return 'low stock';
		return 'in stock';
	}

	sell(numSold = 1) {
		this.numCopies -= numSold;
	}

	restock(numStock = 5) {
		this.numCopies += numStock;
	}
}

module.exports = Book;
