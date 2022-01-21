var m = {
    "position": "manager",
    "income": 100000
};
update(m, "income", function(x) {
    return x * 2;
});
// → {"position": "manager", "income": 200000}
