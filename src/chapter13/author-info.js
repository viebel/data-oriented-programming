Author.name = multi(
  authorNameDispatch,
  method(["low", "html"], authorNameLowHtml),
  method(["medium", "html"], authorNameMediumHtml),
  method(["high", "html"], authorNameHighHtml),
  method(["low", "markdown"], authorNameLowMarkdown),
  method(["medium", "markdown"], authorNameMediumMarkdown),
  method(["high", "markdown"], authorNameHighMarkdown)
);

