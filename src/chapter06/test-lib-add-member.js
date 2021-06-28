var jessie = {
    "email": "jessie@gmail.com",
    "password": "my-secret"
};

var franck = {
    "email": "franck@gmail.com",
    "password": "my-top-secret"
};

var libraryStateBefore = {
    "userManagement": {
        "membersByEmail": {
            "franck@gmail.com": {
                "email": "franck@gmail.com",
                "password": "my-top-secret"
            }
        }
    }
};

var expectedLibraryStateAfter = {
    "userManagement": {
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
    }
};

var result = Library.addMember(libraryStateBefore, jessie);
_.isEqual(result, expectedLibraryStateAfter);
