const { model, Schema } = require("mongoose");

const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  avatar: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Profile = model("User", profileSchema);
model.exports = Profile;
