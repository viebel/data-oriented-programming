System.borrowBook = function(memberId, isbn, bookItemId) {
    var librarySnapshot = SystemData.get();
    var nextLibary = Library.borrowBook(librarySnapshot, memberId, isbn, bookItemId);
    SystemData.commit(librarySnapshot, nextLibrary);
}
