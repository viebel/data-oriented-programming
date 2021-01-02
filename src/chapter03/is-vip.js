function isVIPMember(userManagement, email) {
    return _.get(userManagement, ["membersByEmail", email, "isVIP"]) == true;
}

