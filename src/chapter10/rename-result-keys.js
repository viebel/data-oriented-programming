function renameKeys(map, keyMap) {
  return _.reduce(keyMap,
                  function(res, newKey, oldKey) {
                    var value = _.get(map, oldKey);
                    var resWithNewKey = _.set(res, newKey, value);
                    var resWithoutOldKey = _.omit(resWithNewKey, oldKey);
                    return resWithoutOldKey;
                  },
                  map);
}

function renameResultKeys(results, keyMap) {
  return _.map(results, function(result) {
    return renameKeys(result, keyMap);
  });
}
