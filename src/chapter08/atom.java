class Atom<ValueType> {
  private AtomicReference<ValueType> state;

  public Atom() {}

  ValueType get() {
    return this.state.get();
  }

  void set(ValueType state) {
    this.state.set(state);
  }

  ValueType swap(UnaryOPerator<ValueType> f) {
    while(true) {
      ValueType stateSnapshot = this.state.get();
      ValueType nextState = f(stateSnapshot);
      if (!this.state.compareAndSet(stateSnapshot, nextState)) { // this.state might have changed in another thread during execution of f
        continue;
      }
    }
    return nextState;
  }
}
