function removeAuthorDuplicates(book) {
  var authors = _.get(book, "authors");
  var uniqAuthors = _.uniq(authors);
  return _.set(book,"authors", uniqAuthors);
}

