var mutex = new Mutex();
var counter = 0;


function dbAccess() {
  mutex.lock();
  counter = counter + 1;
  mutex.unlock();
  // access the database
}

function logCounter() {
  mutex.lock();
  console.log('Number of database accesses: ' + counter);
  mutex.unlock();
}
