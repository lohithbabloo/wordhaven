import mongoose from "mongoose";
const { Schema, model } = mongoose;
const UserSchema = new Schema({
  name: { type: "string", required: true },
  email: { type: String, required: true, unique: true, minLength: 8 },
  password: { type: String, required: true },
});

const UserModel = model("User", UserSchema);

export default UserModel;
