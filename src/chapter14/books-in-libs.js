function booksByRack(books) {
    return _.reduce(books, function(racks, book) {
        var bookItems = _.get(book, "bookItems");
        var bookItemsWithBookInfo = _.map(bookItems, function(bookItem) {
            return _.set(bookItem, "title", _.get(book, "title")); // It's cool that we don't mutate orginal data
        });
        var bookItemsByRack = _.groupBy(bookItemsWithBookInfo, "libId");
        return _.merge(racks, bookItemsByRack);
    }, {});
}

