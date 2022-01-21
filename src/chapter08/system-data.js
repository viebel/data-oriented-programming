class SystemState {
  systemData;

  constructor() {
    this.systemData = new Atom();
  }

  get() {
    return this.systemData.get();
  }

  commit(prev, next) {
    this.systemData.set(next);
  }
}
