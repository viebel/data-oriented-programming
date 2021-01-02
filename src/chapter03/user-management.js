class UserManagement {
    isVIPMember(userManagement, email) {
        return _.get(userManagement, ["membersByEmail", email, "isVIP"]) == true;
    }

    isSuperMember(userManagement, email) {
        return _.get(userManagement, ["membersByEmail", email, "isSuper"]) == true;
    }
}
