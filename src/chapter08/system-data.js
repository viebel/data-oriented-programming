class SystemData {
  systemData;

  constructor() {
    this.systemData = new Atom();
  }

  get() {
    return this.systemData.get();
  }

  set(data) {
    this.systemData.set(data);
  }
}
