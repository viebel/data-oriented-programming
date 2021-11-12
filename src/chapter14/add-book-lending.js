User.addBookLending = function(user, bookIsbn, bookItemId) {
    var bookLending = {
        "bookItemId": bookItemId,
        "bookIsbn": bookIsbn
    };
    var bookLendings = _.get(user, "bookLendings");
    var nextBookLendings = _.concat(bookLendings, bookLending);
    var nextUser= _.set(user, nextBookLendings);

    return nextUser;
}
