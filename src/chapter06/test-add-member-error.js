var jessie = {
    "email": "jessie@gmail.com",
    "password": "my-secret"
};

var userManagementStateBefore = {
    "membersByEmail": {
        "jessie@gmail.com": {
            "email": "jessie@gmail.com",
            "password": "my-secret"
        }
    }
};

var expectedException = "Member already exists.";
var exceptionInMutation;

try {
    UserManagement.addMember(userManagementStateBefore, jessie);
} catch (e) {
    exceptionInMutation = e;
}

_.isEqual(exceptionInMutation, expectedException);
