Author.fullName = function(author) {
  var firstName = _.get(author, "firstName");
  var lastName = _.get(author, "lastName");
  return firstName +  " " + lastName;
};

function authorNameLowHtml(author, format) {
  return Author.fullName(author);
}

Author.name = method(["low", "html"], authorNameLowHtml)(Author.name);

function authorNameMediumHtml(author, format) {
  return "<i>" + Author.fullName(author) + "</i>";
}

Author.name = method(["medium", "html"], authorNameMediumHtml)(Author.name);

function authorNameHighHtml(author, format) {
  return "<b><i>" + Author.fullName(author) + "</i></b>";
}

Author.name = method(["high", "html"], authorNameHighHtml)(Author.name);

