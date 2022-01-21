class UserManagement {
    isLibrarian(userManagement, email) {
        return _.has(_.get(userManagement, "librariansByEmail"), email);
    }

    isVIPMember(userManagement, email) {
        return _.get(userManagement, ["membersByEmail", email, "isVIP"]) == true;
    }

    isSuperMember(userManagement, email) {
        return _.get(userManagement, ["membersByEmail", email, "isSuper"]) == true;
    }
}
