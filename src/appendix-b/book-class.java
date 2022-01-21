public class BookData {
  public final String isbn;
  public final String title;
  public final Integer publicationYear;
  public BookData (
    String isbn, 
    String title, 
    Integer publicationYear) {
      this.isbn = isbn;
      this.title = title;
      this.publicationYear = publicationYear;
    }

  public boolean equals(Object o) {
    // Omitted for sake of simplicity
  }

  public int hashCode() {
    // Omitted for sake of simplicity
  }

  public String toString() {
    // Omitted for sake of simplicity
  }
}


