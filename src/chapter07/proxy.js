function proxy(c) {
  return new Proxy(c, {
    has(target, key) {
      return target.has(key);
    },

    getOwnPropertyDescriptor(target, key) {
      return {
        configurable: true,
        enumerable: true,
        writable: false,
        value: target.get(key)
      };

    },

    ownKeys(target) {
      return target.keySeq().toJS();
    },

    get(target, property, receiver) {
      var value = target.get(property);
      if (Immutable.isImmutable(value)) {
        return proxy(value);
      }
      return value;
    }
  });
}

function proxyArr(c) {
  return new Proxy({
    [Symbol.iterator]: Array.prototype.values,
    forEach: Array.prototype.forEach,
    map: Array.prototype.map
  }, {
    has(target, key) {
      if(key === "length") {
        return true;
      }
      return c.has(key);
    },

    getOwnPropertyDescriptor(target, key) {
      return {
        configurable: true,
        enumerable: true,
        writable: false,
        value: c.get(key)
      };

    },

    ownKeys(target) {
      return c.keySeq().toJS();
    },

    get(target, property, receiver) {
      if(property === "length") {
        return c.size;
      }
      var value = c.get(property);
      if (Immutable.isImmutable(value)) {
        return proxy(value);
      }
      return value;
    }
  });
}
