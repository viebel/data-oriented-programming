function dysGreetDogLong(animal) {
  console.log("Woof woof! My name is " + animal.name);
}
dysGreet = method(["dog", true], dysGreetDogLong)(dysGreet);

function dysGreetDogShort(animal) {
  console.log("Woof woof!");
}
dysGreet = method(["dog", false], dysGreetDogShort)(dysGreet);

function dysGreetCatLong(animal) {
  console.log("Meow! I am " + animal.name);
}
dysGreet = method(["cat", true], dysGreetCatLong)(dysGreet);

function dysGreetCatShort(animal) {
  console.log("Meow!");
}
dysGreet = method(["cat", false], dysGreetCatShort)(dysGreet);

function dysGreetCowLong(animal) {
  console.log("Moo! Call me " + animal.name);
}
dysGreet = method(["cow", true], dysGreetCowLong)(dysGreet);

function dysGreetCowShort(animal) {
  console.log("Moo!");
}
dysGreet = method(["cow", false], dysGreetCowShort)(dysGreet);

