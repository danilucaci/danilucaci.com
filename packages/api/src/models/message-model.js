const { model, Schema } = require("mongoose");

const MessageSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    locale: {
      type: String,
      enum: ["en", "es"],
    },
    message: {
      type: String,
      required: [true, "The message is required"],
      trim: true,
      minLength: [
        2,
        "Please describe in more detail why you are getting in touch.",
      ],
      maxLength: [
        800,
        "The message is too long. Please try to be more concise.",
      ],
    },
    consentAccepted: {
      type: Boolean,
      required: true,
      default: false,
      validate: {
        validator: function consentAcceptedValidator(value) {
          return value === true;
        },
        message: function consentAcceptedMessage(props) {
          return `The consent was not accepted: ${props.value}`;
        },
      },
    },
    consentValue: {
      type: String,
      required: [true, "The consent value is required"],
      trim: true,
    },
    dateSent: {
      type: Date,
      required: [true, "The date is required"],
    },
  },
  { timestamps: true },
);

const MessageModel = model("message", MessageSchema);

module.exports = {
  MessageModel: MessageModel,
};
