function greetDog(animal) {
  console.log("Woof Woof! My name is: " + animal.name);
}

function greetCat(animal) {
  console.log("Meow! I am: " + animal.name);
}

function greetCow(animal) {
  console.log("Moo! Call me " + animal.name);
}

function greet(animal) {
  if(dev()) {
    if(!ajv.validate(animalSchema, animal)) {
      var errors = ajv.errorsText(ajv.errors);
      throw ("greet called with invalid arguments: " + errors);
    }
  }
  switch (animal.type) {
  case "dog":
    greetDog(animal);
    break;
  case "cat":
    greetCat(animal);
    break;
  case "cow":
    greetCow(animal);
    break;
  };
}
