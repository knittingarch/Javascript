// A program that helps me keep track of my book collection (starting with comic books), particularly if I lend any books out.
// by Sarah Dawson

// Create Bookshelf Object which will hold books
var name = this[title + " " + seriesNumber];

var bookshelf = {
	number: 2, 
	room: "living room", 
	"# of books": 0,
	listOfBooks: [],
	addBook: function(title, seriesNumber, author, artist, colorist, genre, 
		rating, collectionType, size, coverType, year, listOfBooks) {
			bookshelf["# of books"]++;
			name = {
				author: author, 
				artist: artist, 
				colorist: colorist, 
				genre: genre, 
				rating: rating, 
				collectionType: collectionType, 
				size: size, 
				coverType: coverType, 
				year: year}
			name.title = title;
			name.seriesNumber = seriesNumber;	
			bookshelf.listOfBooks.push(name);	
	},
	deleteBook: function(title, seriesNumber) {		
		// name.title = title;
		// name.seriesNumber = seriesNumber;
		var temp = name;
		bookshelf["# of books"]--;
		bookshelf.listOfBooks.pop(name);
		delete name;
		return temp;
	},
	searchForBook: function(title, seriesNumber) {
		for (var i = 0; i < bookshelf.listOfBooks.length; i++) {
			// TESTING: to identify where the loop was getting corrupted
			// console.log("#1: This is the looped title: " + bookshelf.listOfBooks[i]["title"]);
			// console.log("#2: This is the looped seriesNumber: " + bookshelf.listOfBooks[i]["seriesNumber"]);
			// console.log("#3: This is the param title: " + title);
			// console.log("#4: This is the param seriesNumber: " + seriesNumber);

			if(bookshelf.listOfBooks[i]["title"] === title && bookshelf.listOfBooks[i]["seriesNumber"] === seriesNumber) {
				console.log("You're in luck!  I have " + (bookshelf.listOfBooks[i]["title"]) + " " + (bookshelf.listOfBooks[i]["seriesNumber"]) + " available!");
			} else {
				console.log("Sorry, I currently don't have " + title + " " + seriesNumber + " on my shelf. Check back in the future!");
			}
		}
		return title + " " + seriesNumber;	
	}
};

var TransmetropolitanOne = bookshelf.addBook("Transmetropolitan", 1, "Warren Ellis", "Darick Robertson", "Nathan Eyring", "Dystopian", "Mature", "Trade Comic", "Medium", "Paperback", 2009);

var TransmetropolitanTwo = bookshelf.addBook("Transmetropolitan", 2, "Warren Ellis", "Darick Robertson", "Nathan Eyring", "Dystopian", "Mature", "Trade Comic", "Medium", "Paperback", 2009);

var LazarusFour = bookshelf.addBook("Lazarus", 4, "Greg Rucka", "Michael Lark", "Santi Arcas", "Dystopian", "Mature", "Trade Comic", "Medium", "Paperback", 2016);


// Search Test Cases

// Test should fail if:
// 	1) Doesn't return matching title;
// 	2) Doesn't return all matching titles;
// 	3) Returns a title that's not on the bookshelf
//	4) Doesn't allow for titles without seriesNumber property 
//	5) Returns a title with a seriesNumber that isn't on the shelf

bookshelf.searchForBook("Transmetropolitan", 1);
bookshelf.searchForBook("Transmetropolitan", 2);
bookshelf.searchForBook("Transmetropolitan", 22);
bookshelf.searchForBook(1);
bookshelf.searchForBook(2);
bookshelf.searchForBook();
bookshelf.searchForBook("Transmetropolitan");
bookshelf.searchForBook("Lazarus");


// NEXT STEPS

// refactor addBook() to reduce number of properties; maybe use options{}?
// fix search so it only returns / logs one output; currently returns one for each index of the array length.	
// refine searchBook() to show how many entries match the search params
// add borrowOne(), and returnOne() to Book class

