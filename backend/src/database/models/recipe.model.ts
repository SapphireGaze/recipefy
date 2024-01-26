import mongoose, { Schema } from "mongoose";

import { IRecipe, IRecipeModel, IUser } from "../../lib/types";

import UserModel from "./user.model";

const recipeSchema: mongoose.Schema = new Schema<IRecipe>({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  prepTime: {
    type: Number,
    required: true,
  },
  cookTime: {
    type: Number,
    required: true,
  },
  servings: {
    type: Number,
    required: true,
  },
});

recipeSchema.statics.add = async function (
  token: string,
  recipe: IRecipe
): Promise<void> {
  const _id: string = await UserModel.validateToken(token);

  const newRecipe: IRecipe = await RecipeModel.create({
    name: recipe.name,
    author: new mongoose.Types.ObjectId(_id),
    description: recipe.description,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    prepTime: recipe.prepTime,
    cookTime: recipe.cookTime,
    servings: recipe.servings,
  });

  if (!newRecipe) {
    throw new Error("Error adding recipe to database.");
  }

  const user: IUser | null = await UserModel.findById(_id).exec();

  if (!user) {
    throw new Error("Invalid user.");
  }

  user.recipes.push(newRecipe._id);
  await UserModel.findByIdAndUpdate(user._id, {
    $set: { recipes: user.recipes },
  }).exec();
};

const RecipeModel: mongoose.Model<IRecipe> & IRecipeModel = mongoose.model<
  IRecipe,
  IRecipeModel
>("Recipe", recipeSchema);

export default RecipeModel;
