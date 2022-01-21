function displayFullName(authorData) {
  console.log("Author full name is: ", NameCalculation.fullName(authorData));
}

function displayProlificity(authorData) {
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

function displayAuthorInfo(authorData) {
  if(!ajv.validate(authorSchema, authorData)) {
    throw "displayAuthorInfo called with invalid data";
  };
  displayFullName(authorData);
  displayProlificity(authorData);
}
