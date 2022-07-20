namespace Tests;

record LibraryData(CatalogData Catalog, UserManagementData UserManagement);

record UserManagementData(
    Map<MemberData>    Members,
    Map<LibrarianData> Librarians);

record LibrarianData;

record MemberData(bool IsBlocked);

record UserData;

record CatalogData(
    Map<BookData>   BooksByIsbn,
    Map<AuthorData> AuthorsById);

record BookItemData;

record AuthorData(string Name, string[] BookIsbns);

record BookData(
    string         Isbn,
    string         Title,
    int            PublicationYear,
    BookItemData[] BookItems,
    string[]       AuthorIds);