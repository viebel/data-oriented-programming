class AuthorData {
    constructor(firstName, lastName, books) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.books = books;
    }
}

class NameCalculation {
    static fullName() {
        return data.firstName + " " + data.lastName;
    }
}

class UserData {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.books = email;
    }
}

var userData = new UserData("John", "Doe", "john@doe.com");
NameCalculation.fullName(userData);

var authorData = new AuthorData("Isaac", "Asimov", 500);
NameCalculation.fullName(authorData);
