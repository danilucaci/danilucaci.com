const createMessage = `
  mutation createMessage(
    $email: String!
    $fullName: String!
    $date: String!
    $acceptsConsent: Boolean!
    $consentValue: String!
    $body: String!
  ) {
    createMessage(
      data: {
        person: { 
          create: {
            email: $email
            fullName: $fullName
          }
        }
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

module.exports = createMessage;
