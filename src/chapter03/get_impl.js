function get(m, path) {
  var res = m;
    for(var i = 0; i < path.length; i++) { // <1>
    var key = path[i];
    res = res[key];
  }
  return res;
} 
