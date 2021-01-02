class SystemData {
    systemData;

    get() {
        return this.systemData;
    }

    set(_systemData) {
        this.systemData = _systemData;
    }

    commit(previous, next) {
        if(!SystemValidity.validate(previous, next) {
            throw "The system data to be committed is not valid!";
        });
        this.systemData = SystemConsistency.reconcile(this.systemData,
                                                      previous,
                                                      next);
    }
}
