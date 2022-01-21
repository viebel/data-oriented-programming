var books = {
      "978-1779501127": {
        "isbn": "978-1779501127",
        "title": "Watchmen",
        "publicationYear": 1987,
        "authorIds": ["alan-moore",
                      "dave-gibbons"]
      }
};

var nextBooks = _.set(books, ["978-1779501127", "publicationYear"], 1986)

console.log("Before:", nextBooks["978-1779501127"]["authorIds"][1]);

books["978-1779501127"]["authorIds"][1] = "dave-chester-gibbons";

console.log("After:", nextBooks["978-1779501127"]["authorIds"][1]); 
// → Before: dave-gibbons
// → After: dave-chester-gibbons
