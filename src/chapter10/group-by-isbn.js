var sqlRows = [
  {
    "title": "7 Habits of Highly Effective People",
    "isbn": "978-1982137274",
    "author_name": "Sean Covey"
  },
  {
    "title": "7 Habits of Highly Effective People",
    "isbn": "978-1982137274",
    "author_name": "Stephen Covey"
  },
  {
    "title": "The Power of Habit",
    "isbn": "978-0812981605",
    "author_name": "Charles Duhigg"
  }
];

_.groupBy(sqlRows, "isbn");
