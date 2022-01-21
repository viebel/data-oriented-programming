class System {
    addMember(member) {
        var previous = SystemState.get();
        var next = Library.addMember(previous, member);
        SystemState.commit(previous, next); // <1>
    }
}
