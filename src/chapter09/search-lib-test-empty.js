Immutable.isEqual(Immutable.parseJSON(Library.searchBooksByTitleJSON(libraryData,
                                                                     "Batman")),
                  Immutable.fromJS([]));
