var member = {
    "email": "joe@me.com",
    "password": "secret",
    "isBlocked": true
}

var updatedMember = _.set(member, "password", "hidden");

member["isBlocked"] = false;
