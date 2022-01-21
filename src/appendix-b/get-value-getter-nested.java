var informationPath = List.of("978-1779501127", "title");

DynamicAccess.getAsString(searchResultsMap, informationPath)
.toUpperCase();
// → "WATCHMEN"


