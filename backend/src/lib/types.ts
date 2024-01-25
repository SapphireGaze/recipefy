import mongoose, { Types } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  email: string;
  username: string;
  passwordHash: string;
  recipes: Types.ObjectId[];
  favorites: Types.ObjectId[];
}

export interface IUserModel extends mongoose.Model<IUser> {
  register(email: string, username: string, password: string): Promise<void>;
  login(username: string, password: string): Promise<string>;
  validateToken(token: string): Promise<string>;
}

export interface IRecipe {
  _id: Types.ObjectId;
  name: string;
  author?: Types.ObjectId;
  description?: string;
  ingredients: string[];
  instructions: string;
  prepTime: number;
  cookTime: number;
  servings: number;
}

export interface IRecipeModel extends mongoose.Model<IRecipe> {
  add(token: string, recipe: IRecipe): Promise<void>;
}
