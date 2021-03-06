const allPersons = `
  query allPersons {
    allPersons {
      data {
        _id
        email
        fullName
        messages {
          data {
            _id
            body
            consentValue
            acceptsConsent
            date
          }
        }
      }
    }
  }
`;

module.exports = allPersons;
