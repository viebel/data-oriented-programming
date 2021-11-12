function removeAuthorDuplicates(book) {
  return update(book, "authors", _.uniq);
}
 
