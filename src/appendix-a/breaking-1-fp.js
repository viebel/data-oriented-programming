function createAuthorObject(firstName, lastName, books) {
    return {
        fullName: function() {
            return firstName + " " + lastName;
        },
        isProlific: function () {
            return books > 100;
        }
    };
}

var obj = createAuthorObject("Isaac", "Asimov", 500); 
obj.fullName();
// → "Isaac Asimov"
