var expectedResults = {
  "isbn": "978-1982137274",
  "title": "7 Habits of Highly Effective People",
  "authorNames": [
    "Sean Covey",
    "Stephen Covey"
  ]
};

_.isEqual(expectedResults,
          aggregateField(rows7Habits,
                         "author_name",
                         "authorNames"));
