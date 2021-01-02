class Library {
    static addBookItem(libraryData, userId, bookItemData) {
        if(UserManagement.isLibrarian(libraryData.userManagement, userId) ||
           UserManagement.isVIPMember(libraryData.userManagement, userId)) {
            return Catalog.addBookItem(libraryData.catalog, bookItemData);
        } else {
            throw "Not allowed to add a book item"; // <1>
        }
    }
}

class UserManagement {
    static isLibrarian(userManagementData, userId) {
        // will be implemented later <2>
    }
    static isVIPMember(userManagementData, userId) {
        // will be implemented later <2>
    }
}

class Catalog {
    static addBookItem(catalogData, memberId) {
        // will be implemented later <3>
    }
}
