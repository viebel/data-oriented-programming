var previous = library;

var next = _.set(
    library,
    ["catalog", "booksByIsbn", "978-1779501127", "publicationYear"],
    1986);

var libraryWithUpdatedTitle = _.set(
    library,
    ["catalog", "booksByIsbn", "978-1779501127", "title"],
    "The Watchmen");
var current = _.set(
    libraryWithUpdatedTitle,
    ["catalog", "authorsById", "dave-gibbons", "name"],
    "David Chester Gibbons");


