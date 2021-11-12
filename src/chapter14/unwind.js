function unwind(map, fun) {
    var arr = _.get(map, field);
    return _.map(arr, function(elem) {
        return _.set(map, fun, elem);
    });
}
