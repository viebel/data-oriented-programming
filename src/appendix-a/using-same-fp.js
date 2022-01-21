function createAuthorData(firstName, lastName, books) {
    return {firstName: firstName, lastName: lastName, books: books};
}

function fullName(data) {
    return data.firstName + " " + data.lastName;
}

function createUserData(firstName, lastName, email) {
    return {firstName: firstName, lastName: lastName, email: email};
}

var authorData = createAuthorData("Isaac", "Asimov", 500);
fullName(authorData);

var userData = createUserData("John", "Doe", "john@doe.com");
fullName(userData);
// → "John Doe"
