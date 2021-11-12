
Immutable.map = function(coll, f) {
  return coll.map(f);
};

Immutable.filter = function(coll, f) {
  if(Immutable.isMap(coll)) {
    return Immutable.values(coll).filter(f);
  }
  return coll.filter(f);
};

Immutable.reduce = function(coll, reducer, initialReduction) {
  return coll.reduce(reducer, initialReduction);
};

Immutable.isEmpty = function(coll) {
  return coll.isEmpty();
};

Immutable.concat = function (a, b) {
  return a.concat(b);
};

Immutable.keys = function(coll) {
  return coll.keySeq();
};

Immutable.values = function(coll) {
  return coll.valueSeq();
};

Immutable.parseJSON = function(jsonString) {
  return Immutable.fromJS(JSON.parse(jsonString));
};

Immutable.isMap = function(coll) {
  return Immutable.Map.isMap(coll);
};

Immutable.intersection = Immutable.Set.intersect;
Immutable.union = Immutable.Set.union;

Immutable.isEqual = Immutable.is;


