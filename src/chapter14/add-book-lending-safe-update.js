UserManagement.addBookLending = function(userManagement, memberId, bookIsbn, bookItemId) {
    var bookLending = {
        "bookItemId": bookItemId,
        "bookIsbn": bookIsbn
    };

    var infoPath = ["members", memberId, "bookLendings"];
    return safeUpdate(userManagement,
        infoPath,
        function(bookLendings) {
            return _.concat(bookLendings,
                bookLending);
        },
        []);
}

