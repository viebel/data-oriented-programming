class CatalogDB {
  static addMember(member) {
    var addMemberQuery = `INSERT
                          INTO members
                               (email, encrypted_password)
                          VALUES ($1, $2)`;
    dbClient.query(addMemberQuery,
                   _.at(member, ["email",
                                 "encryptedPassword"]));
  }
}
