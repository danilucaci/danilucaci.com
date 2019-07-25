// require("node-fetch").default needed to prevent `TypeError: o is not a function`
const fetch = require("node-fetch").default;

const { GATSBY_FAUNA_SECRET } = process.env;

const faunaHeaders = {
  "Content-Type": "application/json",
  Authorization: `Basic ${GATSBY_FAUNA_SECRET}`,
};

const faunaURL = "https://graphql.fauna.com/graphql";

const findPersonByEmail = require("./queries/findPersonByEmail");
const connectMessageMutation = require("./mutations/connectMessage");
const createMessageMutation = require("./mutations/createMessage");

async function handleFaunaSync(contactData = null) {
  if (contactData === null) {
    throw new Error("Server Error: Missing contact data variables.");
  }

  let result = "";

  const {
    email,
    fullname,
    formattedDate,
    message,
    acceptsconsentcheckbox,
    consentcheckboxvalue,
  } = contactData;

  const existingEmail = await checkExistingEmail(email).catch((err) => {
    throw new Error(err.message);
  });

  if (existingEmail === null) {
    const variables = {
      email: email,
      fullName: fullname,
      date: formattedDate,
      acceptsConsent: acceptsconsentcheckbox,
      consentValue: consentcheckboxvalue,
      body: message,
    };

    result = await createMessage(variables).catch((err) => {
      throw new Error(err.message);
    });
  } else if (existingEmail !== null) {
    const variables = {
      person: existingEmail._id,
      date: formattedDate,
      acceptsConsent: acceptsconsentcheckbox,
      consentValue: consentcheckboxvalue,
      body: message,
    };

    result = await connectMessage(variables).catch((err) => {
      throw new Error(err.message);
    });
  }

  return result;
}

async function checkExistingEmail(email = null) {
  if (email === null) {
    throw new Error(
      "Server Error: Missing email argument in checkExistingEmail()",
    );
  }

  const emailVariables = {
    email: email,
  };

  const emailFetchRes = await handleFetch(
    findPersonByEmail,
    emailVariables,
  ).catch((err) => {
    throw new Error(err.message);
  });

  if (emailFetchRes.ok) {
    const data = await emailFetchRes.json();
    if (data.errors) {
      const errors = data.errors.map((err) => err.message);
      throw new Error(errors);
    }

    return data.data.findPersonByEmail;
  }

  if (!emailFetchRes.ok) {
    const data = await emailFetchRes.json();
    throw new Error(data.message);
  }

  return null;
}

async function createMessage(variables = null) {
  if (variables === null) {
    throw new Error("Server Error: Missing createMessage() data variables.");
  }

  const fetchRes = await handleFetch(createMessageMutation, variables).catch(
    (err) => {
      throw new Error(err.message);
    },
  );

  if (fetchRes.ok) {
    const data = await fetchRes.json();

    if (data.errors) {
      const errors = data.errors.map((err) => err.message);
      throw new Error(errors);
    }
    return "message.id: " + data.data.createMessage._id;
  }

  const data = await fetchRes.json();
  throw new Error(data.message);
}

async function connectMessage(variables = null) {
  if (variables === null) {
    throw new Error("Server Error: Missing connectMessage() data variables.");
  }

  const fetchRes = await handleFetch(connectMessageMutation, variables).catch(
    (err) => {
      throw new Error(err.message);
    },
  );

  if (fetchRes.ok) {
    const data = await fetchRes.json();

    if (data.errors) {
      const errors = data.errors.map((err) => err.message);
      throw new Error(errors);
    }
    return "message.id: " + data.data.createMessage._id;
  }

  const data = await fetchRes.json();
  throw new Error(data.message);
}

async function handleFetch(query, variables) {
  const res = await fetch(faunaURL, {
    method: "POST",
    headers: faunaHeaders,
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  }).catch((err) => {
    throw new Error(err.message);
  });

  return res;
}

module.exports = handleFaunaSync;
