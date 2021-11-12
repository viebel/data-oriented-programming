function dysGreetDispatch(animal) {
  if(dev()) {
    if(!ajv.validate(animalSchema, animal)) {
      var errors = ajv.errorsText(ajv.errors);
      throw ("dysGreet called with invalid arguments: " + errors);
    }
  }
  var hasLongName = animal.name.length > 5;

  return [animal.type, hasLongName];
};

var dysGreet = multi(dysGreetDispatch);

