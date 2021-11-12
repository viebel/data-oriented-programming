Immutable.propAsFunction = function(prop) {
  if(typeof(prop) == "function") {
    return prop;
  }
  return function(map) {
    return map.get(prop);
  };
};


Immutable.groupBy = function(coll, f) {
  return coll.groupBy(Immutable.propAsFunction(f));
};

