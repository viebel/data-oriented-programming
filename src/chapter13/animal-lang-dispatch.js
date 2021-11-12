var greetLangArgsSchema = {
  "type": "array",
  "prefixItems": [animalSchema, languageSchema]
};

function greetLangDispatch(animal, language) {
  if(dev()) {
    if(!ajv.validate(greetLangArgsSchema, [animal, language])) {
      throw ("greetLang called with invalid arguments: " + ajv.errorsText(ajv.errors));
    }
  }
  return [animal.type, language.type];
};

var greetLang = multi(greetLangDispatch);
