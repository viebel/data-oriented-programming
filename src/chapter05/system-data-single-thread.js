class SystemState {
    systemData;

    get() {
        return this.systemData;
    }

    set(_systemData) {
        this.systemData = _systemData;
    }

    commit(previous, next) {
        var nextSystemData = SystemConsistency.reconcile(this.systemData, // <1>
            previous,
            next);
        if(!SystemValidity.validate(previous, nextSystemData)) {
            throw "The system data to be committed is not valid!";
        };
        this.systemData = nextSystemData;
    }
}
