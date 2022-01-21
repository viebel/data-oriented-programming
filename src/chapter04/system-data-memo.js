class SystemState {
    systemData;
    previousSystemData;

    get() {
        return this.systemData;
    }

    commit(previous, next) {
        var systemDataBeforeUpdate = this.systemData;
        if(!Consistency.validate(previous, next)) {
            throw "The system data to be committed is not valid!";
        }
        this.systemData = next;
        this.previousSystemData = systemDataBeforeUpdate;
    }

    undoLastMutation() {
        this.systemData = this.previousSystemData;
    }
}
