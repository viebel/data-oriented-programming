class OpenLibraryDataSource {
  static rawBookInfo(isbn) {
    var url = `https://openlibrary.org/isbn/${isbn}.json`;
    var jsonString = fetchResponseBody(url);
    var bookInfo = JSON.parse(jsonString);
    if(!valid(bookInfo, bookInfoSchema)) {
      throw "Invalid book info";
    }
  }
}
