Catalog.searchBooksByTitle = function(catalogData, query) {
    var allBooks = _.get(catalogData, "booksByIsbn");
    var matchingBooks = _.filter(allBooks, function(book) {
        return _.get(book, "title").includes(query);
    });
    var bookInfos = _.map(matchingBooks, function(book) {
        return Catalog.bookInfo(catalogData, book);
    });
    return bookInfos;
};
