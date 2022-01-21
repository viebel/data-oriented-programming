var jessie = Immutable.fromJS({
  "email": "jessie@gmail.com",
  "password": "my-secret"
});

var franck = Immutable.fromJS({
  "email": "franck@gmail.com",
  "password": "my-top-secret"
});

var userManagementStateBefore = Immutable.fromJS({
  "membersByEmail": {
    "franck@gmail.com": {
      "email": "franck@gmail.com",
      "password": "my-top-secret"
    }
  }
});

var expectedUserManagementStateAfter = Immutable.fromJS({
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
});

var result = UserManagement.addMember(userManagementStateBefore, jessie);
Immutable.isEqual(result, expectedUserManagementStateAfter);
// → true
