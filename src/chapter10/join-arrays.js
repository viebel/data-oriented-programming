function joinArrays(a, b, keyA, keyB) {
  var mapA = _.keyBy(a, keyA);
  var mapB = _.keyBy(b, keyB);
  var mapsMerged = _.merge(mapA, mapB);
  return _.values(mapsMerged);
}

