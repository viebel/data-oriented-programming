var informationPath = List.of("978-1779501127", "title");
DynamicClassAccess
 .getAsString(searchResultsRecords, informationPath)
 .toUpperCase();
// → "WATCHMEN"


