var libraryData = {
    "catalog": {
        "booksByIsbn": {
            "978-1779501127": {
                "isbn": "978-1779501127",
                "title": "Watchmen",
                "publicationYear": 1987,
                "authorIds": ["alan-moore",
                              "dave-gibbons"]
            }
        },
        "authorsById": {
            "alan-moore": {
                "name": "Alan Moore",
                "bookIsbns": ["978-1779501127"]
            },
            "dave-gibbons": {
                "name": "Dave Gibbons",
                "bookIsbns": ["978-1779501127"]
            }
        }
    }
};


var bookInfo = {
    "isbn": "978-1779501127",
    "title": "Watchmen",
    "authorNames": ["Alan Moore",
                    "Dave Gibbons"]
};


_.isEqual(JSON.parse(Library.searchBooksByTitleJSON(libraryData,
                                                    "Watchmen")),
          [bookInfo]);

_.isEqual(JSON.parse(Library.searchBooksByTitleJSON(libraryData,
                                                    "Batman")),
          []);

