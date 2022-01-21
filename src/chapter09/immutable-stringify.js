var bookInfo = Immutable.fromJS({
  "isbn": "978-1779501127",
  "title": "Watchmen",
  "authorNames": ["Alan Moore",
                  "Dave Gibbons"]
});

JSON.stringify(bookInfo);
// → {\"isbn\":\"978-1779501127\",\"title\":\"Watchmen\",
// → \"authorNames\":[\"Alan Moore\",\"Dave Gibbons\"]}
