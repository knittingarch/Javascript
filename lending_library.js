// A program that helps me keep track of my book collection (starting with comic books), particularly if I lend any books out.
// by Sarah Dawson

// Create Bookshelf Object to hold books

var bookshelf = {
	number: 2, 
	room: "living room", 
	"# of books": 0,
	addBook: function(title, seriesNumber, author, artist, colorist, genre, 
		rating, collectionType, size, hardness, year) {
			bookshelf["# of books"]++;
			this[title + " " + seriesNumber] = {author: author, 
				artist: artist, colorist: colorist, genre: genre, rating: rating, 
				collectionType: collectionType, size: size, hardness: hardness, year: year}
	},
	deleteBook: function(title, seriesNumber) {		
		this[title + " " + seriesNumber].title = title;
		this[title + " " + seriesNumber].seriesNumber = seriesNumber;
		var temp = this[title + " " + seriesNumber];
		bookshelf["# of books"]--;
		delete this[title + " " + seriesNumber];
		return temp;
	},
}; 

//Next steps: refactor addBook() to reduce number of properties; maybe use options{}?


// JUNK CODE WHILE I WORK //

// bookshelf.deleteBook = function(title){		
	// this[title].title = title;
	// var temp = this[title];
	// delete this[title];
	// return temp;
// };


// function addBook(shelf, title, seriesNumber, author, artist, colorist, genre, year, collectionType, size, hardness, year) {
// 	bookshelf["# of books"]++;
// 	bookshelf["book" + bookshelf["# of books"]] = {title: title, seriesNumber: seriesNumber, author: author, artist: artist, colorist: colorist, genre: genre, year: year, collectionType: collectionType, size: size, hardness: hardness, year: year};
// }
