class Atom {
    state;

    constructor() {}

    get() {
        return this.state;
    }

    set(state) {
        this.state = state;
    }

    swap(f) {
        while(true) {
          var stateSnapshot = this.state;
          var nextState = f(stateSnapshot);
          if (!atomicCompareAndSet(this.state, stateSnapshot, nextState)) { // <1>
            continue;
          }
          return nextState;
        }
    }
}
