var mutex = new Mutex();
var cache = {};

function dbAccessCached(query) {
  var resultFromCache = _.get(cache, query);
  if (resultFromCache != nil) {
    return resultFromCache;
  }
  var result = dbAccess(query);
  mutex.lock();
  cache = _.set(cache, query, result);
  mutex.unlock();
  return result;
}

