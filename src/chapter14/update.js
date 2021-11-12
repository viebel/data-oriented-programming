function update(map, path, fun) {
    var currentValue = _.get(map, path);
    var nextValue = fun(currentValue);
    return _.set(map, path, nextValue);
}
