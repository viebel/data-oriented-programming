function lendingRatio(books) {
  var bookItems = flatMap(books, "bookItems");
  var lent = 0;
  var notLent = 0;
  _.forEach(bookItems, function(item) {
    if(_.get(item, "isLent")) {
      lent = lent + 1;
    } else {
      notLent = notLent + 1;
    }
  });
  return lent/(lent + notLent);
}


