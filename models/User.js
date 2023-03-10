const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: [String],
  accountStatus: String,
});

const User = model("User", userSchema);
model.exports = User;
