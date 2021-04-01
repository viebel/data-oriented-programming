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
~~~

var alanMoore = {
  "name": "Alan Moore",
  "bookIsbns": ["978-1779501127"]
};
renameKeys(alanMoore, {"bookIsbns": "books"}); 



var bookItem = {
  "id": "book-item-1",
  "rackId": "rack-17",
  "isLent": true
};

renameKeys(bookItem, {"rackId": "id",
                     "id": "bookItemId"}); 
