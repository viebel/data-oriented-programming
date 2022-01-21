var cache = new Atom();
cache.set({});

function dbAccessCached(query) {
  var resultFromCache = _.get(cache.get(), query);
  if (resultFromCache != nil) {
    return resultFromCache;
  }
  var result = dbAccess(query);
  cache.swap(function(oldCache) {
    return _.set(oldCache, query, result);
  });
  return result;
}
