var greet = multi(
  greetDispatch,
  method("dog", greetDog),
  method("cat", greetCat),
  method("cow", greetCow)
);
