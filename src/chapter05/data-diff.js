class DataDiff {
    static diffObjects(data1, data2) {
        var emptyObject = _.isArray(data1) ? [] : {};
        if(data1 == data2) {
            return emptyObject;
        }
        var keys = _.union(_.keys(data1), _.keys(data2));
        return _.reduce(keys,
                        function (acc, k) {
                            var res = DataDiff.diff(_.get(data1, k),
                                                    _.get(data2, k));
                            if((_.isObject(res) && _.isEmpty(res)) ||
                               (res == "data-diff:no-diff")) {
                                return acc;
                            }
                            return _.set(acc, k, res);
                        },
                        emptyObject);
    }

    static diff(data1, data2) {
        if(_.isObject(data1) && _.isObject(data2)) {
            return DataDiff.diffObjects(data1, data2);
        }
        if(data1 !== data2) {
            return data2;
        }
        return "data-diff:no-diff";
    }

    static leaves(obj, prefix = '') {
        return _.reduce(obj,
                        function(acc, v, k) {
                            if (_.isObject(v)) {
                                return _.concat(acc,
                                                DataDiff.leaves(v,
                                                                prefix + k + "."))
                            }
                            return _.concat(acc, [prefix + k]);
                        },
                        []);
    }
    static isEmptyIntersection(delta1, delta2) {
        return _.isEmpty(_.intersection(DataDiff.leaves(delta1),
                                        DataDiff.leaves(delta2)));
    }
}
