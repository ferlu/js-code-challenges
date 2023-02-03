const Book = require('../1-available-books/Book');

class TechnicalBook extends Book {
	constructor(title, author, isbn, numCopies, edition) {
		super(title, author, isbn, numCopies);
		this.edition = edition;
	}

	getEdition() {
		return console.log(`The current edition of this book is ${this.edition}`);
	}
}

module.exports = TechnicalBook;
