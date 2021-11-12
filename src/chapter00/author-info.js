class NameCalculation {
  static fullName(data) {
    return data.firstName + " " + data.lastName;
  }
}

class AuthorRating {
  static isProlific (data) {
    return data.books > 100;
  }
}

var authorSchema = {
  "type": "object",
  "required": ["firstName", "lastName"],
  "properties": {
    "firstName": {"type": "string"},
    "lastName": {"type": "string"},
    "books": {"type": "integer"}
  }
};

function displayAuthorInfo(authorData) {
  if(!ajv.validate(authorSchema, authorData)) {
    throw "displayAuthorInfo called with invalid data";
  };
  console.log("Author full name is: ", NameCalculation.fullName(authorData));
  if(authorData.books == null) {
    console.log("Author has not written any book");
  } else {
    if (AuthorRating.isProlific(authorData)) {
      console.log("Author is prolific");
    } else {
      console.log("Author is not prolific");
    }
  }
}
