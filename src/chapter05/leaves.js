function informationPaths (obj, path = []) {
    return _.reduce(obj, 
        function(acc, v, k) {
            if (_.isObject(v)) {
                return _.concat(acc,
                    informationPaths(v,
                        _.concat(path, k)));
            }
            return _.concat(acc, [_.concat(path, k)]); // <1>
        },
        []);
}
