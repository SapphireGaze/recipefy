export interface Ingredient {
  ingredient: string;
}

export interface Token {
  token: string;
}

export interface ParamsId {
  params: {
    _id: string;
  };
}

export interface User {
  email?: string;
  username: string;
  password: string;
}

export interface Recipe {
  _id: string;
  name: string;
  author: string;
  description?: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
}
