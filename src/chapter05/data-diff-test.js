var data1 = {
    g: {
        c: 3
    },
    x: 2,
    y: {
        z: 1
    },
    w: [5]
}

var data2 = {
    g: {
        c:3
    },
    x: 2,
    y: {
        z: 2
    },
    w: [4]
}

_.isEqual(DataDiff.diff(data1, data2),
          {
              "w":  [
                  4
              ],
              "y":  {
                  "z": 2
              }
          })
