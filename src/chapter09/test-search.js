var catalogData = Immutable.fromJS({
  "booksByIsbn": {
    "978-1779501127": {
      "isbn": "978-1779501127",
      "title": "Watchmen",
      "publicationYear": 1987,
      "authorIds": ["alan-moore",
                    "dave-gibbons"]
    }
  },
  "authorsById": {
    "alan-moore": {
      "name": "Alan Moore",
      "bookIsbns": ["978-1779501127"]
    },
    "dave-gibbons": {
      "name": "Dave Gibbons",
      "bookIsbns": ["978-1779501127"]
    }
  }
});

var bookInfo = Immutable.fromJS({
  "isbn": "978-1779501127",
  "title": "Watchmen",
  "authorNames": ["Alan Moore",
                  "Dave Gibbons"]
});

Immutable.isEqual(
  Catalog.searchBooksByTitle(catalogData, "Watchmen"), 
  Immutable.fromJS([bookInfo]));
// → true

Immutable.isEqual(
  Catalog.searchBooksByTitle(catalogData, "Batman"), 
  Immutable.fromJS([]));
// → true
