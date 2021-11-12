var randomData = JSONSchemaFaker(searchBooksArgsSchema);
Catalog.searchBooksByTitle.apply(null, randomData);
