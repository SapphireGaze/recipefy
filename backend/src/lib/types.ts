export interface IUser {
  _id?: string;
  email: string;
  username: string;
  passwordHash: string;
  recipes?: IRecipe[];
  favorites?: IRecipe[];
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
