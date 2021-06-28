Catalog.authorNames = function (catalogData, authorIds) {
    return _.map(authorIds, function(authorId) {
        return _.get(catalogData, ["authorsById", authorId, "name"]);
    });
};
