var member = {
  "email": "samantha@gmail.com",
  "encryptedPassword": "c2VjcmV0",
  "isBlocked": false
};

_.at(member,
     ["email", "encryptedPassword"]);

// ["samantha@gmail.com",
//  "c2VjcmV0"]
