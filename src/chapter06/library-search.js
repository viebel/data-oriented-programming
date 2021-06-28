Library.searchBooksByTitleJSON = function (libraryData, query) {
    var catalogData = _.get(libraryData, "catalog");
    var results = Catalog.searchBooksByTitle(catalogData, query);
    var resultsJSON = JSON.stringify(results);
    return resultsJSON;
};

