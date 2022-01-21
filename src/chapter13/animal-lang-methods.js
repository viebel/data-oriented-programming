function greetLangDogEn(animal, language) {
  console.log("Woof woof! My name is " + animal.name + " and I speak " + language.name);
}

greetLang = method(["dog", "en"], greetLangDogEn)(greetLang);

function greetLangDogFr(animal, language) {
  console.log("Ouaf Ouaf! Je m'appelle " + animal.name + " et je parle " + language.name);
}

greetLang = method(["dog", "fr"], greetLangDogFr)(greetLang);

function greetLangCatEn(animal, language) {
  console.log("Meow! I am " + animal.name + " and I speak " + language.name);
}
greetLang = method(["cat", "en"], greetLangCatEn)(greetLang);

function greetLangCatFr(animal, language) {
  console.log("Miaou! Je m'appelle " + animal.name + " et je parle " + language.name);
}
greetLang = method(["cat", "fr"], greetLangCatFr)(greetLang);

function greetLangCowEn(animal, language) {
  console.log("Moo! Call me " + animal.name + " and I speak " + language.name);
}
greetLang = method(["cow", "en"], greetLangCowEn)(greetLang);

function greetLangCowFr(animal, language) {
  console.log("Meuh! Appelle moi " + animal.name + " et je parle " + language.name);
}
greetLang = method(["cow", "fr"], greetLangCowFr)(greetLang);
