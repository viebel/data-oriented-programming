Catalog.bookInfo = function (catalogData, book) {
    return  {
        "title": _.get(book, "title"),
        "isbn": _.get(book, "isbn"),
        "authorNames": Catalog.authorNames(catalogData, _.get(book, "authorIds"))
    };
};
