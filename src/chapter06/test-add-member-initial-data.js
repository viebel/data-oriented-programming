var jessie = {
    "email": "jessie@gmail.com",
    "password": "my-secret"
};

var franck = {
    "email": "franck@gmail.com",
    "password": "my-top-secret"
};

var userManagementStateBefore = {
    "membersByEmail": {
        "franck@gmail.com": {
            "email": "franck@gmail.com",
            "password": "my-top-secret"
        }
    }
};

var expectedUserManagementStateAfter = {
  "membersByEmail": {
      "jessie@gmail.com": {
          "email": "jessie@gmail.com",
          "password": "my-secret"
      },
      "franck@gmail.com": {
          "email": "franck@gmail.com",
          "password": "my-top-secret"
      }
  }
};

var result = UserManagement.addMember(userManagementStateBefore, jessie);
_.isEqual(result, expectedUserManagementStateAfter);
