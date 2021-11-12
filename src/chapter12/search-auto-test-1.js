function searchBooksTest () {
  var randomData = JSONSchemaFaker(searchBooksArgsSchema);
  try {
    var catalogData = randomData[0];
    var firstBook = _.values(_.get(catalogData, "booksByIsbn"))[0];
    var firstLetter = _.get(firstBook, "title").substring(0,1);
    randomData[1] = firstLetter;
    Catalog.searchBooksByTitle.apply(null, randomData);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
