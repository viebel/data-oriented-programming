function createAuthorObject(firstName, lastName, books) {
    var data = {firstName: firstName, lastName: lastName, books: books};

    return {
        fullName: function fullName() {
            return data.firstName + " " + data.lastName;
        }
    };
}

function createUserObject(firstName, lastName, email) {
    var data = {firstName: firstName, lastName: lastName, email: email};

    return {
        fullName: function fullName() {
            return data.firstName + " " + data.lastName;
        }
    };
}

var obj = createUserObject("John", "Doe", "john@doe.com");
obj.fullName();
// → "John Doe"

