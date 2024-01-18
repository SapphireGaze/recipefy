import mongoose, { Schema } from "mongoose";

import { IUser } from "../../lib/types";

const userSchema: mongoose.Schema = new Schema<IUser>({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    require: true,
  },
  recipes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Recipe",
    },
  ],
  favorites: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

const UserModel: mongoose.Model<IUser> = mongoose.model<IUser>(
  "User",
  userSchema
);

export default UserModel;
