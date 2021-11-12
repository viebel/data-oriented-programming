_.sortBy(_.get(catalogData, "authorsById"), function(author) {
    return _.size(_.get(author, "bookIsbns"))
})
