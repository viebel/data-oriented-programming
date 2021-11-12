function ratio(m, fieldA, fieldB) {
    var valA = _.get(m, fieldA);
    var valB = _.get(m, fieldB);
    return valA / (valA + valB);
}
