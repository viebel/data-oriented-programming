var watchmen = Map.of(
                      "isbn", "978-1779501127",
                      "title", "Watchmen",
                      "publicationYear", 1987,
                      "authors", List.of("alan-moore", "dave-gibbons")
                      );

var json = gson.toJson(watchmen);
gson.fromJson(json, Map.class);
