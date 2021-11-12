UserManagement.addBookLending = function(userManagement, memberId,
bookIsbn, bookItemId) {
    return update(userManagement,
        ["members", memberId, "bookLendings"],
        function(bookLendings) {
            var bookLending = {
                "bookItemId": bookItemId,
                "bookIsbn": bookIsbn
            };
            return _.concat(bookLendings, bookLending);
        });
}
