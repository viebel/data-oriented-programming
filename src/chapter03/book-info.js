function bookInfo(catalogData, book) {
    var bookInfo =  {
        "title": _.get(book, "title"),
        "isbn": _.get(book, "isbn"),
        "authorNames": authorNames(catalogData, book)
    };
    return bookInfo; //<1>
}
