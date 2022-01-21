function diffObjects(data1, data2) {
    var emptyObject = Immutable.isArray(data1) ? Immutable.fromJS([]) : Immutable.fromJS({});
    if(data1 == data2) {
        return emptyObject;
    }
    var keys = Immutable.union(Immutable.keys(data1), Immutable.keys(data2));
    return Immutable.reduce(keys,
        function (acc, k) {
            var res = diff(Immutable.get(data1, k),
                Immutable.get(data2, k));
            if((Immutable.isObject(res) && Immutable.isEmpty(res)) ||
                (res == "data-diff:no-diff")) {
                return acc;
            }
            return Immutable.set(acc, k, res);
        },
        emptyObject);
}

function diff(data1, data2) {
    if(Immutable.isObject(data1) && Immutable.isObject(data2)) {
        return diffObjects(data1, data2);
    }
    if(data1 !== data2) {
        return data2;
    }
    return "data-diff:no-diff";
}
