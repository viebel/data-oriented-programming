function aggregateFields(rows, idFieldName, fieldName, aggregateFieldName) {
  var groupedRows = _.values(_.groupBy(rows, idFieldName));
  return _.map(groupedRows, function(groupedRows) {
    return aggregateField(groupedRows, fieldName, aggregateFieldName);
  });
}

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

var expectedResults =
    [
      {
        "authorNames": [
          "Sean Covey",
          "Stephen Covey"
        ],
        "isbn": "978-1982137274",
        "title": "7 Habits of Highly Effective People"
      },
      {
        "authorNames": ["Charles Duhigg"],
        "isbn": "978-0812981605",
        "title": "The Power of Habit",
      }
    ];


_.isEqual(aggregateFields(sqlRows,
                          "isbn",
                          "author_name",
                          "authorNames"),
          expectedResults);         
