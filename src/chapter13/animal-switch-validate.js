var animalSchema = {
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "type": {"type": "string"}
  },
  "required": ["name", "type"],
};

function greet(animal) {
  if(dev()) { // <1>
    if(!ajv.validate(animalSchema, animal)) {
      var errors = ajv.errorsText(ajv.errors);
      throw ("greet called with invalid arguments: " + errors);
    }
  }
  switch (animal.type) {
  case "dog":
    console.log("Woof Woof! My name is: " + animal.name);
    break;
  case "cat":
    console.log("Meow! I am: " + animal.name);
    break;
  case "cow":
    console.log("Moo! Call me " + animal.name);
    break;
  };
}
