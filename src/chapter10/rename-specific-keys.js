function renameBookInfoKeys(bookInfo) {
  return {
    "bookTitle": _.get(bookInfo, "title"),
    "isbn": _.get(bookInfo, "isbn"),
    "publicationYear": _.get(bookInfo, "publication_year")
  };
}

var bookResults = [
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

_.map(bookResults, renameBookInfoKeys);
