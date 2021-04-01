function getBookProperty(libraryData, isbn, fieldName) {
  var informationPath = ["catalog", "booksByIsbn", isbn, fieldName]; 
  return _.get(libraryData, informationPath);
}

getBookProperty(libraryData, "978-1779501127", "title");
