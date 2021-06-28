Map watchmen = HashTreePMap.from(Map.of(
                      "isbn", "978-1779501127",
                      "title", "Watchmen",
                      "publicationYear", 1987,
                      "authors", TreePVector.from(List.of("alan-moore", "dave-gibbons")),
                      "bookItems", TreePVector.from(List.of(
                                           HashTreePMap.from(Map.of(
                                                  "id", "book-item-1",
                                                  "rackId", "rack-17",
                                                  "isLent", true
                                                  )),
                                           HashTreePMap.from(Map.of(
                                                   "id", "book-item-2",
                                                   "rackId", "rack-17",
                                                   "isLent", false
                                                   ))
                                           ))
                      ));

