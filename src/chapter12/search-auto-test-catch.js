function searchBooksTest () {
  var randomData = JSONSchemaFaker(searchBooksArgsSchema);
  try {
    Catalog.searchBooksByTitle.apply(null, randomData);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
