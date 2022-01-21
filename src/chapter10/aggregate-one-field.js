function aggregateField(rows, fieldName, aggregateFieldName) {
  var aggregatedValues = _.map(rows, fieldName);
  var firstRow = _.nth(rows, 0);
  var firstRowWithAggregatedValues = _.set(firstRow,
                                           aggregateFieldName,
                                           aggregatedValues);
  return _.omit(firstRowWithAggregatedValues, fieldName);
}
