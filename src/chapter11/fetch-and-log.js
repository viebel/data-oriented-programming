function fetchAndLog(url) { 
  fetch(url)
    .then(function(response) {
    // The response is a Response instance.
    // You parse the data into a useable format using `.json()`
    return response.json();
  }).then(function(data) {
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(); // Insert a new line for clarity sake
    console.log(data);
  });
}
