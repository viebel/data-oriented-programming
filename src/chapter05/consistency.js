class SystemConsistency {
    static threeWayMerge(current, previous, next) {
        var previousToCurrent = DataDiff.diff(previous, current);
        var previousToNext = DataDiff.diff(previous, next);
        if(DataDiff.isEmptyIntersection(previousToCurrent, previousToNext)) {
            return _.merge(current, previousToNext);
        }
        throw "Conflicting concurrent mutations.";
    }
    static reconcile(current, previous, next) {
        if(current == previous) {
            return next; // <1>
        }
        return SystemConsistency.threeWayMerge(current,
                                               previous,
                                               next);
    }
}
