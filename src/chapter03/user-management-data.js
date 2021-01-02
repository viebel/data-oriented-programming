
var userManagementData = {
    "librarians": {
        "franck@gmail.com" : {
            "email": "franck@gmail.com",
            "encryptedPassword": "bXlwYXNzd29yZA==" //<1>
        }
    },
    "members": {
        "samantha@gmail.com": {
            "email": "samantha@gmail.com",
            "encryptedPassword": "c2VjcmV0", //<2>
            "isBlocked": false,
            "bookLendings": [
                {
                    "bookItemId": "book-item-1",
                    "bookIsbn": "978-1779501127",
                    "lendingDate": "2020-04-23"
                }
            ]
        }
    }
}
