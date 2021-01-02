function searchBooksByTitle(catalogData, query) {
    var allBooks = _.get(catalogData, "booksByIsbn");
    var matchingBooks = _.filter(allBooks, function(book) { //<1> <2>
        return _.get(book, "title").includes(query);
    });

    var bookInfos = _.map(matchingBooks, function(book) { // <2>
        return bookInfo(catalogData, book);
    });
    return bookInfos;
}

searchBooksByTitle(_.get(libraryData, "catalog"), "Watchmen")
