function countUserLendings(userManagement) {
    var lendings = _.map(_.get(userManagement, "members"), function (member) {
        return _.get(member, "bookLendings").length;
    });

    return _.sum(lendings);
}
