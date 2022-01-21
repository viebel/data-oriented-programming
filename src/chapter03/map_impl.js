function map(coll, f) {
    var res = [];
    for(var i = 0; i < coll.length; i++) { // <1>
        res[i] = f(coll[i]);
    }
    return res;
}
