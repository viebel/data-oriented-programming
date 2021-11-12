function authorNameLowMarkdown(author, format) {
  return Author.fullName(author);
}

Author.name = method(["low", "markdown"], authorNameLowMarkdown)(Author.name);

function authorNameMediumMarkdown(author, format) {
  return "**" + Author.fullName(author) + "**";
}

Author.name = method(["medium", "markdown"], authorNameMediumMarkdown)(Author.name);

function authorNameHighMarkdown(author, format) {
  return "***" + Author.fullName(author) + "***";
}

Author.name = method(["high", "markdown"], authorNameHighMarkdown)(Author.name);
