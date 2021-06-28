var counter = new Atom();
counter.set(0);

function dbAccess() {
  counter.swap(function(x) { // <1>
    return x + 1;
  });
  // access the database
}

function logCounter() {
  console.log('Number of database accesses: ' + counter.get());
}
