var rowsByIsbn = _.groupBy(sqlRows, "isbn");
var groupedRows = _.values(rowsByIsbn);

_.map(rowsByIsbn, function(groupedRows) {
  return aggregateField(groupedRows, "author_name", "authorNames");
})
