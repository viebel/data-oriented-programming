function lendingRatio(books) {
  var bookItems = flatMap(books, "bookItems");
  var stats = _.reduce(bookItems, function(res, item) {
    if(_.get(item, "isLent")) {
      res.lent = res.lent + 1;
    } else {
      res.notLent = res.notLent + 1;
    }
    return res;
  }, {notLent: 0, lent:0});
  return stats.lent/(stats.lent + stats.notLent);
}
