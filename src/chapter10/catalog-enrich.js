class Catalog {
  static enrichedSearchBooksByTitle(searchPayload) {
    var title = _.get(searchPayload, "title");
    var fields = _.get(searchPayload, "fields");

    var dbBookInfos = CatalogDataSource.matchingBooks(title);
    var isbns = _.map(dbBookInfos, "isbn");

    var openLibBookInfos = OpenLibraryDataSource.multipleBookInfo(isbns, fields);

    return _.joinArrays(dbBookInfos, openLibBookInfos);
  }
}
