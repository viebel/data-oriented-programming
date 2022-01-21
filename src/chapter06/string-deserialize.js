var myString = "{\"publicationYear\":1987,\"title\":\"Watchmen\"}";
var myData = JSON.parse(myString);
_.get(myData, "title");
// → "Watchmen"
