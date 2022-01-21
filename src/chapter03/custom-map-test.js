map(["alan-moore", "dave-gibbons"], 
      function(authorId) {
  return _.get(catalogData, ["authorsById", authorId, "name"]);
}); 
// → [ "Alan Moore", "Dave Gibbons"]

