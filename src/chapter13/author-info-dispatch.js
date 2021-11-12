Author.prolificityLevel = function(author) {
  var books = _.count(_.get(author, "bookIsbns"));
  if (author.books <= 10) {
    return "low";
  };
  if (author.books >= 51) {
    return "high";
  }
  return "medium";
};

var authorNameArgsSchema = {
  "type": "array",
  "prefixItems": [
    authorSchema,
    {"enum": ["markdown", "html"]}
  ]
};

function authorNameDispatch(author, format) {
  if(dev()) {
    if(!ajv.validate(authorNameArgsSchema, [author, format])) {
      throw ("Author.name called with invalid arguments: " + ajv.errorsText(ajv.errors));
    }
  }

  return [Author.prolificityLevel(author), format];
};

Author.name = multi(authorNameDispatch);

