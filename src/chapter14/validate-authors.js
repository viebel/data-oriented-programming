function isValidAuthorId(authors, authorId) {
    return _.has(authors, authorId);

function validateAuthors(books, authors) {
    return 
    _.every(
        _.uniq(authorIdsInBooks(books), isValidAuthorId));
}
