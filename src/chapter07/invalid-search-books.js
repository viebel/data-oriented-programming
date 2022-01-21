var invalidSearchBooksRequest = {
  "tilte": "habit",
  "fields": ["title", "weight", "number_of_pages"]
};


validate(searchBooksRequestSchema, invalidSearchBooksRequest); 
// → false
