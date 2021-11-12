function dysGreetDogShort(animal) {
  console.log("Woof woof! My name is " + animal.name);
}
dysGreet = method(["dog", false], dysGreetDogShort)(dysGreet);

function dysGreetDogLong(animal) {
  console.log("Woof woof!");
}
dysGreet = method(["dog", true], dysGreetDogLong)(dysGreet);

function dysGreetCatShort(animal) {
  console.log("Meow! I am " + animal.name);
}
dysGreet = method(["cat", false], dysGreetCatShort)(dysGreet);

function dysGreetCatLong(animal) {
  console.log("Meow!");
}
dysGreet = method(["cat", true], dysGreetCatLong)(dysGreet);

function dysGreetCowShort(animal) {
  console.log("Moo! Call me " + animal.name);
}
dysGreet = method(["cow", false], dysGreetCowShort)(dysGreet);

function dysGreetCowLong(animal) {
  console.log("Moo!");
}
dysGreet = method(["cow", true], dysGreetCowLong)(dysGreet);

