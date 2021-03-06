const connectMessage = `
  mutation connectMessage(
    $person: ID!
    $date: String!
    $acceptsConsent: Boolean!
    $consentValue: String!
    $body: String!
  ) {
    createMessage(
      data: {
        person: { connect: $person }
        date: $date
        acceptsConsent: $acceptsConsent
        consentValue: $consentValue
        body: $body
      }
    ) {
      _id
      consentValue
      acceptsConsent
      date
      body
      person {
        email
        fullName
      }
    }
  }
`;

module.exports = connectMessage;
