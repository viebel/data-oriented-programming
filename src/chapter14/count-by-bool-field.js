function inc (n) {
  return n + 1;
}

function countByBoolField(coll, field, keyTrue, keyFalse) {
  return _.reduce(coll, function(res, item) {
    if (_.get(item, field)) {
      return update(res, keyTrue, inc);
    }
    return update(res, keyFalse, inc);
  }, {[keyTrue]: 0, // <1>
      [keyFalse]: 0});
}

