var input = [
    {"a": true},
    {"a": false},
    {"a": true},
    {"a": true}
];

var expectedRes = {
    "aTrue": 3,
    "aFalse": 1
};

_.isEqual(countByBoolField(input, "a", "aTrue", "aFalse"), expectedRes);

