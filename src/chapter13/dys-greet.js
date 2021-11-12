var dysGreet = multi(
  dysGreetDispatch,
  method(["dog", false], dysGreetDogShort),
  method(["dog", true], dysGreetDogLong),
  method(["cat", false], dysGreetCatShort),
  method(["cat", true], dysGreetCatLong),
  method(["cow", false], dysGreetCowShort),
  method(["cow", true], dysGreetCowLong)
);

