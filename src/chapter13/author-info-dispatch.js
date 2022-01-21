Author.prolificityLevel = function(author) {
  var books = _.size(_.get(author, "bookIsbns"));
  if (books <= 10) {
    return "low";
  };
  if (books >= 51) {
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
      throw ("Author.myName called with invalid arguments: " + ajv.errorsText(ajv.errors));
    }
  }

  return [Author.prolificityLevel(author), format];
};

Author.myName = multi(authorNameDispatch);

