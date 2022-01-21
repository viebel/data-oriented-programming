var data1 = Immutable.fromJS({
  g: {
    c: 3
  },
  x: 2,
  y: {
    z: 1
  },
  w: [5]
});

var data2 = Immutable.fromJS({
  g: {
    c:3
  },
  x: 2,
  y: {
    z: 2
  },
  w: [4]
});

Immutable.isEqual(diff(data1, data2),
             Immutable.fromJS({
               "w":  [
                 4
               ],
               "y":  {
                 "z": 2
               }
             }));
