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

Immutable.isMap = function(coll) {
    return Immutable.Map.isMap(coll);
};

Immutable.intersection = Immutable.Set.intersect;
Immutable.union = Immutable.Set.union;



