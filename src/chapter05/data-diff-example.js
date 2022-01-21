var data1 = {
  "a": {
    "x": 1,
    "y": [2, 3],
    "z": 4
  }
};

var data2 = {
  "a": {
    "x": 2,
    "y": [2, 4],
    "z": 4
  }
}

diff(data1, data2);
//{
//  "a":  {
//    "x": 2,
//    "y":  [
//      undefined,
//      4
//    ]
//  }
//}
