import mongoose, { Schema } from "mongoose";

import { IRecipe } from "../../lib/types";

const recipeSchema: mongoose.Schema = new Schema<IRecipe>({
  name: {
    type: String,
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
    type: String,
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

const RecipeModel: mongoose.Model<IRecipe> = mongoose.model<IRecipe>(
  "Recipe",
  recipeSchema
);

export default RecipeModel;
