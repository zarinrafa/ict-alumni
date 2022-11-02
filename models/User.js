import mongoose from "mongoose"

const validateEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const UserSchema = new mongoose.Schema(
  {
    userid: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    gradyear: {
      type: String,
    },
    occupation: {
      type: String,
      required: true,
    },
    bloodgroup: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema)