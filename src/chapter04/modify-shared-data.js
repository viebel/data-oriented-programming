var member = {
    "email": "joe@me.com",
    "password": "secret",
    "isBlocked": true
}

var nextMember = _.set(member, "password", "hidden");

member["isBlocked"] = false;
