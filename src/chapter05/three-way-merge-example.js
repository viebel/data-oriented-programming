var previous = library;
var next = _.set(library,
                ["catalog", "booksByIsbn", "978-1779501127", "publicationYear"],
                1986);
var current = _.set(library,
                    ["catalog", "booksByIsbn", "978-1779501127", "title"],
                    "The Watchmen");
