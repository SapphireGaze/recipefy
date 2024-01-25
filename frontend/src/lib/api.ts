import { Recipe } from "./types";

const host: string =
  process.env.NEXT_PUBLIC_API_HOST || "http://127.0.0.1:3030";

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const response: Response = await fetch(`${host}/api/recipe`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  return response.json();
};
