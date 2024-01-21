import mongoose, { Types } from "mongoose";

export interface IUser {
  _id?: string;
  email: string;
  username: string;
  passwordHash: string;
  recipes?: Types.ObjectId[];
  favorites?: Types.ObjectId[];
}

export interface IUserModel extends mongoose.Model<IUser> {
  register(email: string, username: string, password: string): Promise<void>;
  login(username: string, password: string): Promise<string>;
}

export interface IRecipe {
  _id?: string;
  name: string;
  description?: string;
  ingredients: string[];
  instructions: string;
  prepTime: number;
  cookTime: number;
  servings: number;
}
