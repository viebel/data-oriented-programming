var rows = [
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

var authorNames = _.map(rows, "author_name"); // <1>
var firstRow = _.nth(rows, 0);
var bookInfoWithAuthorNames = _.set(firstRow, "authorNames", authorNames);
var bookInfo = _.omit(bookInfoWithAuthorNames, "author_name"); // <2>
