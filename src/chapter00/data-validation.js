var ajv = new Ajv({allErrors: true}); // <1>

function handleAddAuthorRequest(authorData)  {
  if(!ajv.validate(authorSchema, authorData)) {
    var errors = ajv.errorsText(ajv.errors);
    throw ("Invalid data in AddAuthor request: " + errors);
  }
  // Process the request...
}
