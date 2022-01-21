function unwind(map, field) {
    var arr = _.get(map, field);
    return _.map(arr, function(elem) {
        return _.set(map, field, elem);
    });
}
