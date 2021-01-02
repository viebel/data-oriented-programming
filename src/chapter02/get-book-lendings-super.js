class Library {
    static getBookLendings(libraryData, userId, memberId) {
        if(Usermanagement.isLibrarian(libraryData.userManagement, userId) ||
           Usermanagement.isSuperMember(libraryData.userManagement, userId)) {
            return Catalog.getBookLendings(libraryData.catalog, memberId);
        } else {
            throw "Not allowed to get book lendings"; // <1>
        }
    }
}

class UserManagement {
    static isLibrarian(userManagementData, userId) {
        // will be implemented later <2>
    }
    static isSuperMember(userManagementData, userId) {
        // will be implemented later <2>
    }
}

class Catalog {
    static getBookLendings(catalogData, memberId) {
        // will be implemented later <3>
    }
}
