var books = [
  {
    "title": "7 Habits of Highly Effective People",
    "isbn": "978-1982137274",
    "available": true
  },
  {
    "title": "The Power of Habit",
    "isbn": "978-0812981605",
    "available": false
  }
];

_.keyBy(books, "isbn");

