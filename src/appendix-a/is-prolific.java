class AuthorRating {
  static boolean isProlific (Map<String, Object> data) {
    return (int)data.get("books") > 100;
  }
}
