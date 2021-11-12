var listOfMaps = [
  {
    "title": "7 Habits of Highly Effective People",
    "isbn": "978-1982137274",
    "publication_year": 1989
  },
  {
    "title": "The Power of Habit",
    "isbn": "978-0812981605",
    "publication_year": 2012
  }
];

var expectedResults = [
  {
    "bookTitle": "7 Habits of Highly Effective People",
    "isbn": "978-1982137274",
    "publicationYear": 1989
  },
  {
    "bookTitle": "The Power of Habit",
    "isbn": "978-0812981605",
    "publicationYear": 2012
  }
];


var results = renameResultKeys(listOfMaps,
                               {"title": "bookTitle",
                                "publication_year": "publicationYear"});

_.isEqual(expectedResults, results);

