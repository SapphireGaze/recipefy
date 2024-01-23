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
    throw "Cannot leave field empty.";
  }

  if (!validator.isEmail(email)) {
    throw "Invalid email.";
  }

  email = validator.normalizeEmail(email) || "";

  if (
    (await this.findOne({ email: email })) ||
    (await this.findOne({ username: username }))
  ) {
    throw "Email or username already in use.";
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
    throw "Cannot leave field empty.";
  }

  const user: IUser | null = await this.findOne({
    username: username,
  }).exec();

  if (!user) {
    throw "Username not found.";
  }

  const match: boolean = await bcrypt.compare(password, user.passwordHash);

  if (!match) {
    throw "Incorrect password.";
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
    throw "No token found.";
  }

  let _id: string = "";
  const secret: string = process.env.JWT_SECRET || "secret";

  jwt.verify(token, secret, (err: VerifyErrors | null, decoded: any) => {
    if (err) {
      throw "Invalid jwt token.";
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
