import { User, Recipe, Token, ErrorMessage } from "./types";

const host: string =
  process.env.NEXT_PUBLIC_API_HOST || "http://127.0.0.1:3030";

export const fetchRecipe = async (_id: string): Promise<Recipe> => {
  const response: Response = await fetch(`${host}/api/recipe/${_id}`);

  if (!response.ok) {
    const error: ErrorMessage = await response.json();
    throw new Error(`Failed to fetch data: ${error.error}`);
  }

  return response.json();
};

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const response: Response = await fetch(`${host}/api/recipe`);

  if (!response.ok) {
    const error: ErrorMessage = await response.json();
    throw new Error(`Failed to fetch data: ${error.error}`);
  }

  return response.json();
};

export const login = async (
  username: string,
  password: string,
): Promise<string> => {
  const user: User = { username: username, password: password };

  const response: Response = await fetch(`${host}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const error: ErrorMessage = await response.json();
    throw new Error(`Failed to fetch data: ${error.error}`);
  }

  const data: Token = await response.json();

  return data.token;
};

export const signup = async (
  email: string,
  username: string,
  password: string,
): Promise<string> => {
  const user: User = { email: email, username: username, password: password };

  const response: Response = await fetch(`${host}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const error: ErrorMessage = await response.json();
    throw new Error(`Failed to fetch data: ${error.error}`);
  }

  const data: Token = await response.json();

  return data.token;
};

export const authenticate = async (token: string): Promise<boolean> => {
  const response: Response = await fetch(`${host}/api/auth/authenticate`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.ok;
};
