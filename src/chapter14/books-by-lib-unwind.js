function booksByRack(books) {
    var bookItems =  flatMap(books, function(book) {
        return unwind(book, "bookItems");
    });
    return _.groupBy(bookItems, "bookItems.libId")
}
