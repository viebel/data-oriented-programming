function filter(coll, f) {
    var res = [];
    for(var i = 0; i < coll.length; i++) { // <1>
        if(f(coll[i])) {
            res.push(coll[i]);
        }
    }
    return res;
} 
