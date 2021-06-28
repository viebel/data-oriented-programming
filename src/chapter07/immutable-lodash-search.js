Immutable.getDirect = Immutable.get;

Immutable.get = function(coll, path) {
  if (typeof(path) == "string") {
    return Immutable.getDirect(coll, path);
  }
  return Immutable.getIn(coll, path);
};

Immutable.map = function(coll, f) {
  return coll.map(f);
};

Immutable.filter = function(coll, f) {
  if(Immutable.isMap(coll)) {
    return coll.valueSeq().filter(f);
  }
  return coll.filter(f);
};

Immutable.isEqual = Immutable.is;
