function searchBooksTest () {
  var catalogRandom = JSONSchemaFaker.generate(catalogSchema);
  var queryRandom = JSONSchemaFaker.generate({ "type": "string" });
  Catalog.searchBooksByTitle(catalogRandom, queryRandom);   
}
