const firebaseMockUserClaims = {
  iss: "https://securetoken.google.com/my-test-app",
  aud: "my-test-app-01",
  auth_time: 1611227759,
  user_id: "bd88f3d0-ebf6-500a-bbd0-87bc9c7e9c2e",
  sub: "206037fe-39e1-5a0a-84e0-4c67cabbeed9",
  iat: 1611227759,
  exp: 1611231359,
  email: "test-user@mail.com",
  email_verified: true,
  firebase: { identities: { email: [""] }, sign_in_provider: "password" },
  uid: "c7e9dfc1-0dbf-595a-bb0e-ea92a272e8ca",
};

module.exports = {
  firebaseMockUserClaims: firebaseMockUserClaims,
};
