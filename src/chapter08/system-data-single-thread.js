class SystemState {
  systemData;

  get() {
    return this.systemData;
  }

  set(_systemData) {
    this.systemData = _systemData;
  }

  commit(previous, next) {
    this.systemData = SystemConsistency.reconcile(this.systemData,
                                                  previous,
                                                  next);
  }
}
