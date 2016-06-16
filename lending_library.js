// A program that helps me keep track of my book collection (starting with comic books), particularly if I lend any books out.
// by Sarah Dawson

// Create Bookshelf Object which will hold books

var bookshelf = {
	number: 2, 
	room: "living room", 
	"# of books": 0,
	listOfBooks: [],
	addBook: function(title, seriesNumber, author, artist, colorist, genre, 
		rating, collectionType, size, coverType, year, listOfBooks) {
			bookshelf["# of books"]++;
			this[title + " " + seriesNumber] = {
				author: author, 
				artist: artist, 
				colorist: colorist, 
				genre: genre, 
				rating: rating, 
				collectionType: collectionType, 
				size: size, 
				coverType: coverType, 
				year: year}
			this[title + " " + seriesNumber].title = title;
			this[title + " " + seriesNumber].seriesNumber = seriesNumber;	
			bookshelf.listOfBooks.push(this[title + " " + seriesNumber]);	
	},
	deleteBook: function(title, seriesNumber) {		
		this[title + " " + seriesNumber].title = title;
		this[title + " " + seriesNumber].seriesNumber = seriesNumber;
		var temp = this[title + " " + seriesNumber];
		bookshelf["# of books"]--;
		bookshelf.listOfBooks.pop(title + " " + seriesNumber);
		delete this[title + " " + seriesNumber];
		return temp;
	},
	searchForBook: function(title, seriesNumber) {
		for (var i = 0; i < bookshelf.listOfBooks.length; i++) {
			if(bookshelf.listOfBooks[i]["title"] && bookshelf.listOfBooks[i]["seriesNumber"] === title, seriesNumber) {
				return "You're in luck!  I have " + title + " " + seriesNumber + " available!";
			} else {
				return "Sorry, I currently don't have " + title + " " + seriesNumber + " on my shelf. Check back in the future!";
			}
		}
	}
};

var TransmetropolitanOne = bookshelf.addBook("Transmetropolitan", 1, "Warren Ellis", "Darick Robertson", "Nathan Eyring", "Dystopian", "Mature", "Trade Comic", "Medium", "Paperback", 2009);

var TransmetropolitanTwo = bookshelf.addBook("Transmetropolitan", 2, "Warren Ellis", "Darick Robertson", "Nathan Eyring", "Dystopian", "Mature", "Trade Comic", "Medium", "Paperback", 2009);


// Search Test Cases

// Test should fail if:
// 	1) Doesn't return matching title;
// 	2) Doesn't return all matching titles;
// 	3) Returns a title that's not on the bookshelf;
//	4) Doesn't allow for titles without seriesNumber property 

bookshelf.searchForBook("Transmetropolitan", 1);
bookshelf.searchForBook("Transmetropolitan", 2);
bookshelf.searchForBook(1);
bookshelf.searchForBook(2);
bookshelf.searchForBook();
bookshelf.searchForBook("Transmetropolitan");
bookshelf.searchForBook("Lazarus");


// NEXT STEPS

// refactor addBook() to reduce number of properties; maybe use options{}?
// add searchBook(), borrowOne(), and returnOne() to Book class

