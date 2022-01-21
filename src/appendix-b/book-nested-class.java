public class BookAttributes {
  public Integer numberOfPages;
  public String language; 
  public BookAttributes(Integer numberOfPages, String language) {
    this.numberOfPages = numberOfPages;
    this.language = language;
  }
}

public class BookWithAttributes {
  public String isbn;
  public String title;
  public Integer publicationYear;
  public BookAttributes attributes;
  public Book (
    String isbn, 
    String title, 
    Integer publicationYear,
    Integer numberOfPages,
    String language) {
      this.isbn = isbn;
      this.title = title;
      this.publicationYear = publicationYear;
      this.attributes = new BookAttributes(numberOfPages, language);
    }
}



