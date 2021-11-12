Library.borrowBook = function(library, memberId, isbn, bookItemId) {
    var currentCatalog = _.get(library, "catalog");
    var nextCatalog = Catalog.markBookItemAsLent(currentCatalog, isbn, bookItemId);

    var currentUserManagement = _.get(library, "userManagement");
    var nextUserManagement = UserManagement.addBookLending(currentUserManagement, memberId, isbn, bookItemId);

    var nextLibrary = _.set(library, "catalog", nextCatalog);
    nextLibrary = _.set(nextLibrary,  "userManagement", nextUserManagement);
    return nextLibrary;
}
