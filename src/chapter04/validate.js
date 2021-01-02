SystemState.commit = function(previous, next) {
    if(!SystemValidity.validate(previous, next) {
        throw "The system data to be committed is not valid!";
    });
    this.systemData = next;
}
