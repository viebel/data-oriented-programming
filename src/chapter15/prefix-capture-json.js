function hasWordStartingWith(sentence, prefix) {
  console.log(JSON.stringify(sentence));
  console.log(JSON.stringify(prefix));
  var words = sentence.split(" ");
  return _.find(words, function(word) {
    return word.startsWith(prefix);
  }) != null;
}
