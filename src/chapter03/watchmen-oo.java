class Book {
    public String isbn;
    public String title;
    public Int publicationYear;
    public String[] authors;
    public BookItem[] bookItems;

    constructor(String isbn, String title, Int publicationYear, String[] authors, BookItem[] bookItems) {
        this.isbn = isbn;
        this.title = title;
        this.publicationYear = publicationYear;
        this.authors = authors;
        this.bookItems = bookItems;
    }
}

class BookItem {
    public String id;
    public String rackId;
    public Boolean  isLent;
    constructor(String id, String rackId, Boolean isLent) {
        this.id = id;
        this.rackId = rackId;
        this.isLent = isLent;
    }
}

Book watchmenBook = new Book("978-1779501127",
                             "Watchmen",
                             1987,
                             ["alan-moore", "dave-gibbons"],
                             [new BookItem("book-item-1", "rack-17", true),
                              new BookItem("book-item-2", "rack-17", false)]);
