function searchBooksTest () {
  var catalogRandom = JSONSchemaFaker.generate(catalogSchema);
  var queryRandom = JSONSchemaFaker.generate({ "type": "string" });
  try {
    Catalog.searchBooksByTitle(catalogRandom, queryRandom);
    return true;
  } catch (error) {
    return false;
  }
}
