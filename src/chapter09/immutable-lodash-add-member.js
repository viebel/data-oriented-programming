Immutable.setDirect = Immutable.set;

Immutable.set = function(coll, path) {
  if (typeof(path) == "string") {
    return Immutable.setDirect(coll, path);
  }
  return Immutable.setIn(coll, path);
};

Immutable.hasDirect = Immutable.has;

Immutable.has = function(coll, path) {
  if (typeof(path) == "string") {
    return Immutable.hasDirect(coll, path);
  }
  return Immutable.hasIn(coll, path);
};

