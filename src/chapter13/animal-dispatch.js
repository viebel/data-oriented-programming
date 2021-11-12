function greetDispatch(animal) { // <1>
  if(dev()) {
    if(!ajv.validate(animalSchema, animal)) { // <2>
      var errors = ajv.errorsText(ajv.errors);
      throw ("greet called with invalid arguments: " + errors);
    }
  }

  return animal.type; // <3>
}

var greet = multi(greetDispatch); // <4>

