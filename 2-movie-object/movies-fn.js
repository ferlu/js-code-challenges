function Movie(title, director, genre, releaseYear, rating) {
	this.title = title;
	this.director = director;
	this.genre = genre;
	this.releaseYear = releaseYear;
	this.rating = rating;
}

Movie.prototype.getOverview = function () {
	console.log(
		`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`
	);
};

const eeaao = new Movie(
	'Everything Everywhere All at Once',
	'Daniel Kwan, Daniel Scheinert',
	'comedy-drama',
	2022,
	'5 stars'
);

eeaao.getOverview();
