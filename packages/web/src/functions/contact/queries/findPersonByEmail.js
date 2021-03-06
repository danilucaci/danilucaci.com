const findPersonByEmail = `
  query findPersonByEmail(
    $email: String!
  ) {
    findPersonByEmail(email: $email) {
      _id
      email
      fullName
    }
  }
`;

module.exports = findPersonByEmail;
