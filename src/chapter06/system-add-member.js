System.addMember = function(systemState, member) {
    var previous = systemState.get();
    var next = Library.addMember(previous, member);
    systemState.commit(previous, next);
};
