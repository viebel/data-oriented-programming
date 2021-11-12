function renameBookInfoKeys(bookInfo) {
  return {
    "bookTitle": _.get(bookInfo, "title"),
    "isbn": _.get(bookInfo, "isbn"),
    "publicationYear": _.get(bookInfo, "publication_year")
  };
}

_.map(bookResults, renameBookInfoKeys);
