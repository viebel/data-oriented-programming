function authorIdsInBooks(books) {
    return _.flatten(_.map(books, "authorIds"));
}

