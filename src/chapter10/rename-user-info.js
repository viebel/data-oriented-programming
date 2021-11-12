var listOfMaps = [
  {
    "email": "jennie@gmail.com",
    "encryptedPassword": "secret-pass"
  },
  {
    "email": "franck@hotmail.com",
    "encryptedPassword": "my-secret"
  }
];


var results = renameResultKeys(listOfMaps,
                               {"email": "userEmail"});


