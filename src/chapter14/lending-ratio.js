function lendingRatio(books) {
    var bookItems = flatMap(books, "bookItems");
    var stats = countByBoolField(bookItems, "isLent", "lent", "notLent");
    return stats.lent/(stats.lent + stats.notLent);
}

