export interface IUser {
  email: string;
  username: string;
  passwordHash: string;
  recipes?: IRecipe[];
}

export interface IRecipe {
  name: string;
  description?: string;
  ingredients: string[];
  instructions: string;
  prepTime: number;
  cookTime: number;
  servings: number;
}
