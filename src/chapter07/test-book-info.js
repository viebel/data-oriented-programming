var catalogData = Immutable.fromJS({
    "authorsById": {
        "alan-moore": {
            "name": "Alan Moore"
        },
        "dave-gibbons": {
            "name": "Dave Gibbons"
        }
    }
});

var book = Immutable.fromJS({
    "isbn": "978-1779501127",
    "title": "Watchmen",
    "publicationYear": 1987,
    "authorIds": ["alan-moore", "dave-gibbons"]
});

var expectedResult = Immutable.fromJS({
    "authorNames": ["Alan Moore", "Dave Gibbons"],
    "isbn": "978-1779501127",
    "title": "Watchmen",
});

var result = Catalog.bookInfo(catalogData, book);

Immutable.isEqual(result, expectedResult);
