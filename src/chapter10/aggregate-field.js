var rows7Habits = [
  {
    "author_name": "Sean Covey",
    "isbn": "978-1982137274",
    "title": "7 Habits of Highly Effective People"
  },
  {
    "author_name": "Stephen Covey",
    "isbn": "978-1982137274",
    "title": "7 Habits of Highly Effective People"
  }
];

var authorNames = _.map(rows7Habits, "author_name"); // <1>
var firstRow = _.nth(rows7Habits, 0);
var bookInfoWithAuthorNames = _.set(firstRow, "authorNames", authorNames);
_.omit(bookInfoWithAuthorNames, "author_name"); // <2>
