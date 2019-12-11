const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const firestore = admin.firestore();
const cors = require("cors");
const helmet = require("helmet");
const nodemailer = require("nodemailer");
const FirebaseFunctionsRateLimiter = require("firebase-functions-rate-limiter")
  .default;
const express = require("express");
const app = express();

const rateLimiterConfiguration = {
  name: "dlRateLimiterCalls",
  periodSeconds: 60 * 5,
  maxCalls: 10,
  debug: true,
};

const rateLimiter = FirebaseFunctionsRateLimiter.withFirestoreBackend(
  rateLimiterConfiguration,
  firestore,
);

const gmailEmail = functions.config().gmail.email;
const gmailAppPassword = functions.config().gmail.apppassword;
const devOrigin = functions.config().origin.dev;
const prodOrigin = functions.config().origin.prod;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailAppPassword,
  },
});

const validateData = require("./helpers/validateData");

async function validateFirebaseIdToken(req, res, next) {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    console.error("No Bearer token found in the Authorization header.");

    return res.status(401).send({
      data: null,
      error: "Unauthorized",
    });
  }

  try {
    const idToken = req.headers.authorization.split("Bearer ")[1];

    await admin.auth().verifyIdToken(idToken);

    return next();
  } catch (error) {
    console.error("Failed to verify the Firebase ID token: ", error);

    return res.status(401).send({
      data: null,
      error: "Unauthorized",
    });
  }
}

async function rateLimitCalls(req, res, next) {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    console.error("No Bearer token found in the Authorization header.");

    return res.status(401).send({
      data: null,
      error: "Unauthorized",
    });
  }

  try {
    const idToken = req.headers.authorization.split("Bearer ")[1];

    const isQuotaExceeded = await rateLimiter.isQuotaExceededOrRecordUsage(
      idToken,
    );

    console.log({ isQuotaExceeded });

    if (isQuotaExceeded) {
      console.error(`Quota was exceeded: ${isQuotaExceeded}`);
      return res.status(429).send({
        data: null,
        error: "Too many requests. Please try again later.",
      });
    }

    return next();
  } catch (error) {
    console.error("Failed to get the Bearer Token in rateLimitCalls: ", error);

    return res.status(401).send({
      data: null,
      error: "Unauthorized",
    });
  }
}

const corsOptions = {
  origin: prodOrigin,
  methods: "POST",
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(rateLimitCalls);
app.use(validateFirebaseIdToken);
app.use(express.json());
app.use(validateData);

app.post("/", async (req, res) => {
  try {
    const {
      fullname,
      email,
      message,
      consentAccepted,
      consentValue,
      datesent,
      locale = "en",
    } = req.body;

    const errorMessages = {
      en: {
        generic:
          "Something went wrong while sending the message. Please try again.",
      },
      es: {
        generic:
          "Algo ha salido mal mientras se enviaba el mensaje. Por favor intentalo de nuevo.",
      },
    };

    const newDateFromDateSent = new Date(datesent);

    const dateOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      timeZone: "Europe/Madrid",
    };

    const formattedDate = newDateFromDateSent.toLocaleDateString(
      "es-ES",
      dateOptions,
    );

    const contactSnapshot = await firestore
      .collection("contacts")
      .where("email", "==", email)
      .limit(1)
      .get()
      .catch((error) => {
        console.error("Failed to get the user from contacts collection", error);

        return res.status(400).send({
          data: null,
          error:
            locale === "en"
              ? errorMessages.en.generic
              : errorMessages.es.generic,
        });
      });

    if (contactSnapshot.empty) {
      console.log("Created new contact");

      const doc = await firestore
        .collection("contacts")
        .add({
          fullname: fullname,
          email: email,
        })
        .catch((error) => {
          console.error("Failed to add a new contact", error);

          return res.status(400).send({
            data: null,
            error:
              locale === "en"
                ? errorMessages.en.generic
                : errorMessages.es.generic,
          });
        });

      await firestore
        .collection("contacts")
        .doc(doc.id)
        .collection("messages")
        .add({
          message: message,
          consentAccepted: consentAccepted,
          consentValue: consentValue,
          date: newDateFromDateSent,
        })
        .catch((error) => {
          console.error("Failed to add a new message", error);

          return res.status(400).send({
            data: null,
            error:
              locale === "en"
                ? errorMessages.en.generic
                : errorMessages.es.generic,
          });
        });
    } else {
      console.log("Added message to previous contact");

      if (Array.isArray(contactSnapshot.docs) && contactSnapshot.size === 1) {
        const contactID = contactSnapshot.docs[0].id;

        await firestore
          .collection("contacts")
          .doc(contactID)
          .collection("messages")
          .add({
            message: message,
            consentAccepted: consentAccepted,
            consentValue: consentValue,
            date: newDateFromDateSent,
          })
          .catch((error) => {
            console.error("Failed to add a new message", error);

            return res.status(400).send({
              data: null,
              error:
                locale === "en"
                  ? errorMessages.en.generic
                  : errorMessages.es.generic,
            });
          });
      }
    }

    const mailOptions = {
      from: '"Dani Lucaci" <danilucaci@gmail.com>',
      to: "danilucaci@gmail.com",
      subject: `New contact message on danilucaci.com`,
      text: message,
      html: `
      <h4>From</h4>
      <p>${fullname}</p>
      <p>${email}</p>
      <h4>Message</h4>
      <p>${message}</p>
      <h4>Date sent</h4>
      <p>${formattedDate}</p>`,
    };

    await mailTransport.sendMail(mailOptions).catch((error) => {
      console.error("Failed to send email", error);

      return res.status(500).send({
        data: null,
        error:
          locale === "en" ? errorMessages.en.generic : errorMessages.es.generic,
      });
    });

    return res.status(200).send({
      data: "Ok",
      error: null,
    });
  } catch (error) {
    console.error("Failed to store the message.", error);

    return res.status(500).send({
      data: null,
      error:
        locale === "en" ? errorMessages.en.generic : errorMessages.es.generic,
    });
  }
});

// https://firebase.google.com/docs/functions/locations
// europe-west1 (Belgium)
// europe-west2 (London)

exports.contact = functions.region("europe-west1").https.onRequest(app);
