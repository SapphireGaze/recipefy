import mongoose, { Schema } from "mongoose";

import { IRecipe } from "../../lib/types";

const recipeSchema = new Schema<IRecipe>({
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

const RecipeModel = mongoose.model("Recipe", recipeSchema);

export default RecipeModel;
