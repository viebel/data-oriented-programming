var groupedRows = _.values(rowsByIsbn);

_.map(bookInfos, function(groupedRows) {
  return aggregateField(groupedRows, "author_name", "authorNames");
})
