function hasWordStartingWith(sentence, prefix) {
  var sentenceLowerCase = sentence.toLowerCase();
  var prefixLowerCase = prefix.toLowerCase();
    var prefixRegExp = new RegExp("\\b" + prefixLowerCase); // <1>
  return sentenceLowerCase.match(prefixRegExp) != null;
 }

