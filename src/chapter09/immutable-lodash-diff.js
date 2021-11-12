Immutable.reduce = function(coll, reducer, initialReduction) {
  return coll.reduce(reducer, initialReduction);
};

Immutable.isEmpty = function(coll) {
  return coll.isEmpty();
};

Immutable.keys = function(coll) {
  return coll.keySeq();
};

Immutable.isObject = function(coll) {
  return Immutable.Map.isMap(coll);
};

Immutable.isArray = Immutable.isIndexed;

Immutable.union = function() {
  return Immutable.Set.union(arguments);
};

