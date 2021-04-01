## Challenge #1: Retrieve a piece of information

**Challenge**: Write a function named `getBookProperty` that receives and ISBN and a field name and returns the value of the field for the book with the given ISBN

## Challenge #2: Search information

**Challenge**: Write a function named `bookInfo` that receives a string and returns a JSON string that contains book information about the books whose title contains the given string, in a case insensitive way. Book information is made of: title, isbn, author full names.

**Remark**: You are not allowed to extract author names from author ids. Assume that author ids are opaque strings.

# Challenge #3: Add a piece of information

**Challenge**: Write a function named `blockMember` that receives an email address and returns a new version of library data **without altering the original version**, where the user with the given email is blocked.


# Challenge #4: Rename keys in a data entity

**Challenge**: Write a function named `renameKeys` that receives a data entity and a key mappings and returns a new data entity, without altering the original entity, where the fields are renamed according to the key mappings

# Challenge #5: Merge pieces of information

**Challenge**: Write a function named `mergeAndSerialize` that receives two pieces of book information, one from the database and one from an external service like [Open Library Books API](https://openlibrary.org/dev/docs/api/books) and returns a JSON string with information from both sources.

# Challenge #6: Compare versions of data

**Challenge**: Write a function named `diff` that receives two versions of library data and returns an object that contains the diff between the two versions, in the format of your choice.

