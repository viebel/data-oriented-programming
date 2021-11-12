var greetLang = multi(
  greetLangDispatch,
  method(["dog", "en"], greetLangDogEn),
  method(["dog", "fr"], greetLangDogFr),
  method(["cat", "en"], greetLangCatEn),
  method(["cat", "fr"], greetLangCatFr),
  method(["cow", "en"], greetLangCowEn),
  method(["cow", "fr"], greetLangCowFr)
);

