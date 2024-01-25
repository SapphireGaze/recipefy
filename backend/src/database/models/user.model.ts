import mongoose, { Schema } from "mongoose";
import jwt, { VerifyErrors } from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

import { IUser, IUserModel } from "../../lib/types";

require("dotenv").config();

const userSchema: mongoose.Schema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
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

userSchema.statics.register = async function (
  email: string,
  username: string,
  password: string
): Promise<void> {
  if (!email || !username || !password) {
    throw new Error("Cannot leave field empty.");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Invalid email.");
  }

  email = validator.normalizeEmail(email) || "";

  if (
    (await this.findOne({ email: email })) ||
    (await this.findOne({ username: username }))
  ) {
    throw new Error("Email or username already in use.");
  }

  const passwordHash: string = await bcrypt.hash(password, 10);

  await this.create({
    email: email,
    username: username,
    passwordHash: passwordHash,
  });
};

userSchema.statics.login = async function (
  username: string,
  password: string
): Promise<string> {
  if (!username || !password) {
    throw new Error("Cannot leave field empty.");
  }

  const user: IUser | null = await this.findOne({
    username: username,
  }).exec();

  if (!user) {
    throw new Error("Username not found.");
  }

  const match: boolean = await bcrypt.compare(password, user.passwordHash);

  if (!match) {
    throw new Error("Incorrect password.");
  }

  const secret: string = process.env.JWT_SECRET || "secret";
  const token: string = jwt.sign({ _id: user._id.toString() }, secret, {
    expiresIn: "7d",
  });

  return token;
};

userSchema.statics.validateToken = async function (
  token: string
): Promise<string> {
  if (!token) {
    throw new Error("No token found.");
  }

  let _id: string = "";
  const secret: string = process.env.JWT_SECRET || "secret";

  jwt.verify(token, secret, (err: VerifyErrors | null, decoded: any) => {
    if (err) {
      throw new Error("Invalid jwt token.");
    }
    _id = decoded._id;
  });

  return _id;
};

const UserModel: mongoose.Model<IUser> & IUserModel = mongoose.model<
  IUser,
  IUserModel
>("User", userSchema);

export default UserModel;
