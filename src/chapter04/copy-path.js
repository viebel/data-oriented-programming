// With freeze
function shallowCopy(o) {
  if(Array.isArray(o)) {
    return Object.assign([], o);
  }
  return Object.assign({}, o);
}

function shallowAssign(o, k, v) {
  var copy = shallowCopy(o);
  copy[k] = v;
  return Object.freeze(copy);
}

function setIn(m, [k, ...restOfPath], v) {
  var modifiedNode;
  if (restOfPath.length === 0) {
    modifiedNode = v;
  } else {
    modifiedNode = setIn(m[k], restOfPath, v);
  }
  return shallowAssign(m, k, modifiedNode);
}

function setInFreeze(m, path, v) {
  return setIn(m, path, deepFreeze(v));
}

// Without array

function setInNaive(m, [k, ...restOfPath], v) {
  var modifiedNode = v;
  if (restOfPath.length > 0) {
    modifiedNode = setIn(m[k], restOfPath, v);
  }
  return Object.assign({}, m, {[k]: modifiedNode});
}


// Without freeze

function shallowCopy(o) {
  if(Array.isArray(o)) {
    return Object.assign([], o);
  }
  return Object.assign({}, o);
}

function set(o, k, v) {
  var copy = shallowCopy(o);
  copy[k] = v;
  return copy;
}

function setIn(m, [k, ...restOfPath], v) {
  var modifiedNode;
  if (restOfPath.length === 0) {
    modifiedNode = v;
  } else {
    modifiedNode = setIn(m[k], restOfPath, v);
  }
  return set(m, k, modifiedNode);
}
