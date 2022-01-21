class SystemState {
    systemState;

    get() {
        return this.systemState;
    }

    commit(previous, next) {
        this.systemState = next;
    }
}
