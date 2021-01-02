function authorNames(catalogData, book) {
    var authorIds = _.get(book, "authorIds");
    var names = _.map(authorIds, function(authorId) { //<1>
        return _.get(catalogData, ["authorsById", authorId, "name"]);
    });
    return names;
}
