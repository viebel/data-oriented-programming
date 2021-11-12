function searchBooksTest () {
  var randomData = JSONSchemaFaker(searchBooksArgsSchema);
  try {
    var catalogData = randomData[0];
    var book = _.values(_.get(catalogData, "booksByIsbn"))[0];
    randomData[1] = _.get(book, "title").substring(0,1);
    var res = Catalog.searchBooksByTitle.apply(null, randomData);
    return true;
  } catch (error) {
    console.log(error);
    console.log(res);
    return false;
  }
}
