Catalog.authorNames = function(catalogData, book) {
    var authorIds = _.get(book, "authorIds");
    var names = _.map(authorIds, function(authorId) {
      return _.get(catalogData, ["authorsById", authorId, "name"], "Not available"); //<1>
    });
    return names;
};
