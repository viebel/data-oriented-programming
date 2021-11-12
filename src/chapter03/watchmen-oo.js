class Book {
    isbn;
    title;
    publicationYear;
    authors;
    bookItems;
    constructor(isbn, title, publicationYear, authors, bookItems) {
        this.isbn = isbn;
        this.title = title;
        this.publicationYear = publicationYear;
        this.authors = authors;
        this.bookItems = bookItems;
    }
}

class BookItem {
    id;
    libId;
    isLent;
    constructor(id, libId, isLent) {
        this.id = id;
        this.libId = libId;
        this.isLent = isLent;
    }
}

var watchmenBook = new Book("978-1779501127",
                            "Watchmen",
                            1987,
                            ["alan-moore", "dave-gibbons"],
                            [new BookItem("book-item-1", "nyc-central-lib", true),
                             new BookItem("book-item-2", "nyc-central-lib", false)]);
