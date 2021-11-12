Library.addMember = function(library, member) {
    var currentUserManagement = _.get(library, "userManagement");
    var nextUserManagement = UserManagement.addMember(currentUserManagement, member);
    var nextLibrary = _.set(library, "userManagement", nextUserManagement);
    return nextLibrary;
};
