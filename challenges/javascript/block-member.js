function blockMember(email) {
  var informationPath = ["userManagement", "members", email, "isBlocked"]; 
  return _.set(libraryData, informationPath, true);
}

var updatedLibraryData = blockMember("samantha@gmail.com");

var informationPath = ["userManagement", "members", "samantha@gmail.com", "isBlocked"]; 
[_.get(updatedLibraryData, informationPath), _.get(libraryData, informationPath)];
