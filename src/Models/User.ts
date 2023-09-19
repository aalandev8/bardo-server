import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../Interfaces/user.interface";

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      required: true,
    },
    fiestas: {
      type: [String],
      required: true,
    },
  },
  { versionKey: false }
);

const User = mongoose.model<IUser & Document>("User", UserSchema);

export default User;
