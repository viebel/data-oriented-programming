var dbClient; //<1>

var title = "habit";
var matchingBooksQuery = `SELECT title, isbn
                          FROM books
                          WHERE title LIKE '%$1%'`;// <2>
var books = dbClient.query(matchingBooksQuery, [title]); // <3>
JSON.stringify(books);
