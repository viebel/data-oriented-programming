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


var systemState = new SystemState(); // <1>
systemState.commit(null, libraryStateBefore); // <2>
System.addMember(systemState, jessie); // <3>

_.isEqual(systemState.get(), expectedLibraryStateAfter); // <4>
