function authorNameLowHtml(author, format) {
  return "<i>" + _.get(author, "name") + "</i>";
}

Author.myName = method(["low", "html"], authorNameLowHtml)(Author.myName);

function authorNameMediumHtml(author, format) {
  return "<b>" + _.get(author, "name") + "</b>";
}

Author.myName = method(["medium", "html"], authorNameMediumHtml)(Author.myName);

function authorNameHighHtml(author, format) {
  return "<b><i>" + _.get(author, "name") + "</i></b>";
}

Author.myName = method(["high", "html"], authorNameHighHtml)(Author.myName);

