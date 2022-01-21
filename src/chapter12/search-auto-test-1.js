function searchBooksTest () {
  var catalogRandom = JSONSchemaFaker.generate(catalogSchema);
  var queryRandom = JSONSchemaFaker.generate({ "type": "string" });
  try {
    var firstBook = _.values(_.get(catalogRandom, "booksByIsbn"))[0];
    var query = _.get(firstBook, "title").substring(0,1);
    Catalog.searchBooksByTitle(catalogRandom, query);
    return true;
  } catch (error) {
    return false;
  }
}

