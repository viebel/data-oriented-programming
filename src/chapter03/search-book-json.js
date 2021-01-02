function searchBooksByTitleJSON(libraryData, query) {
    var results = searchBooksByTitle(_.get(libraryData, "catalog"), query);
    var resultsJSON = JSON.stringify(results);
    return resultsJSON;
}
