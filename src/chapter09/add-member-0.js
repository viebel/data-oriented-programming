var addMemberQuery = "INSERT INTO members (email, password) VALUES ($1, $2)";
dbClient.query(addMemberQuery,
               [_.get(member, "email"), //<1>
                _.get(member, "encryptedPassword")]);
