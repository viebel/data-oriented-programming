function hasWordStartingWith(sentence, prefix) {
  console.log(sentence);
  console.log(prefix);
  var words = sentence.split(" ");
  return _.find(words, function(word) {
    return word.startsWith(prefix);
  }) != null;
}
