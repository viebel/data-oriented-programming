function searchBooksByTitle(catalogData, query) {
    var allBooks = _.values(_.get(catalogData, "booksByIsbn"));
    var matchingBooks = _.filter(allBooks, function(book) { 
        return _.get(book, "title").includes(query); // <1>
    });

    var bookInfos = _.map(matchingBooks, function(book) { 
        return bookInfo(catalogData, book);
    });
    return bookInfos;
}

