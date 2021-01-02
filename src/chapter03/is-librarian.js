function isLibrarian(userManagement, email) {
    return _.has(_.get(userManagement, "librariansByEmail"), email);
}
