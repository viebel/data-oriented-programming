class Catalog {
    static authorNames(catalogData, book) {
        var authorIds = _.get(book, "authorIds");
        var names = _.map(authorIds, function(authorId) { 
            return _.get(catalogData, ["authorsById", authorId, "name"]);
        });
        return names;
    }

    static bookInfo(catalogData, book) {
        var bookInfo =  {
            "title": _.get(book, "title"),
            "isbn": _.get(book, "isbn"),
            "authorNames": Catalog.authorNames(catalogData, book)
        }; // <1>
        return bookInfo;
    }

    static searchBooksByTitle(catalogData, query) {
        var allBooks = _.get(catalogData, "booksByIsbn");
        var matchingBooks = _.filter(allBooks, function(book) { // <2>
            return _.get(book, "title").includes(query);
        });
        var bookInfos = _.map(matchingBooks, function(book) { 
            return Catalog.bookInfo(catalogData, book);
        });
        return bookInfos;
    }
}

class Library {
    static searchBooksByTitleJSON(libraryData, query) {
        var catalogData = _.get(libraryData, "catalog");
        var results = Catalog.searchBooksByTitle(catalogData, query);
        var resultsJSON = JSON.stringify(results); // <3>
        return resultsJSON;
    }
}
