function greet(animal) {
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
