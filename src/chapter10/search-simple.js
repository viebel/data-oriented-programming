var dbClient; //<1>
var ajv = new Ajv({allErrors: true}); // <2>

var title = "habit";
var matchingBooksQuery = `SELECT title, isbn
                          FROM books
                          WHERE title LIKE '%$1%'`;// <3>
var books = dbClient.query(matchingBooksQuery, [title]); // <4>
if(!ajv.validate(dbSearchResultSchema, books)) {
  var errors = ajv.errorsText(ajv.errors);
  throw "Internal error: Unexpected result from the database: " + errors;
}

JSON.stringify(books);
