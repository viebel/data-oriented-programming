var member = {
    "email": "jessie@gmail.com",
    "password": "my-secret"
};

var userManagementStateBefore = {};

var expectedUserManagementStateAfter = {
  "membersByEmail": {
      "jessie@gmail.com": {
          "email": "jessie@gmail.com",
          "password": "my-secret"
      }
  }
};

var result = UserManagement.addMember(userManagementStateBefore, member);
_.isEqual(result, expectedUserManagementStateAfter);
