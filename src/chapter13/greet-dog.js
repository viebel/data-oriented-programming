function greetDog(animal) { // <1>
  console.log("Woof woof! My name is " + animal.name);
}
greet = method("dog", greetDog)(greet); // <2>
