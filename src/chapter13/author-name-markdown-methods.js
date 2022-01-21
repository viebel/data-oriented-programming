function authorNameLowMarkdown(author, format) {
  return "*" + _.get(author, "name") + "*";
}

Author.myName = method(["low", "markdown"], authorNameLowMarkdown)(Author.myName);

function authorNameMediumMarkdown(author, format) {
  return "**" + _.get(author, "name") + "**";
}

Author.myName = method(["medium", "markdown"], authorNameMediumMarkdown)(Author.myName);

function authorNameHighMarkdown(author, format) {
  return "***" + _.get(author, "name") + "***";
}

Author.myName = method(["high", "markdown"], authorNameHighMarkdown)(Author.myName);
