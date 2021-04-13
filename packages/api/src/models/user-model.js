const { model, Schema } = require("mongoose");

const { isValidEmail } = require("../utils/is-valid-email");

const UserSchema = Schema(
  {
    firebaseUID: {
      type: String,
    },
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => isValidEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
  },
  {
    timestamps: true,
  },
);

const UserModel = model("user", UserSchema);

module.exports = {
  UserModel: UserModel,
};
