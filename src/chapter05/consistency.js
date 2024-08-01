class SystemConsistency {
    static threeWayMerge(current, previous, next) {
        var previousToCurrent = diff(previous, current); // <1> 
        var previousToNext = diff(previous, next);
        if(!havePathInCommon(previousToCurrent, previousToNext)) {
            return _.merge(current, previousToNext);
        }
        throw "Conflicting concurrent mutations.";
    }
    static reconcile(current, previous, next) {
        if(current == previous) {
            return next; // <2>
        }
        return SystemConsistency.threeWayMerge(current,
            previous,
            next);
    }
}

