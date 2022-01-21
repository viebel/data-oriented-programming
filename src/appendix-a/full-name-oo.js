class Author {
  constructor(firstName, lastName, books) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.books = books;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
  isProlific() {
    return this.books > 100;
  }
}


