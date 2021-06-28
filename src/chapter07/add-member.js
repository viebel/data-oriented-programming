UserManagement.addMember = function(userManagement, member) {
    var email = Immutable.get(member, "email");
    var infoPath = ["membersByEmail", email];
    if(Immutable.hasIn(userManagement, infoPath)) {
        throw "Member already exists.";
    }
    var nextUserManagement =  Immutable.setIn(userManagement,
                                              infoPath,
                                              member);
    return nextUserManagement;
};
