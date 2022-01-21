function reduce(coll, f, initVal) {
    var currentRes = initVal;
    for (var i = 0; i < coll.length; i++) { // <1>
        currentRes = f(currentRes, coll[i])
    }
    return currentRes;
} 
