function hasWordStartingWith(sentence, prefix) {
  var words = sentence.split(" ");
  return _.find(words, function(word) {
    return word.startsWith(prefix);
  }) != null;
 }
