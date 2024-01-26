"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

import { ParamsId, Recipe } from "@/lib/types";
import { fetchRecipe } from "@/lib/api";

export default function RecipeIdPage({ params: { _id } }: ParamsId) {
  const [recipe, setRecipe] = useState<Recipe>({} as Recipe);

  useEffect(() => {
    const fetchData = async (): Promise<JSX.Element | undefined> => {
      try {
        const fetchedRecipe: Recipe = await fetchRecipe(_id);
        setRecipe(fetchedRecipe);
      } catch (err) {
        console.error("Error fetching recipes:", err);
        return (
          <p className="text-center text-2xl">
            Error loading recipe. Please try again later.
          </p>
        );
      }
    };

    fetchData();
  }, [_id]);

  const ingredientsList: JSX.Element | null = recipe.ingredients ? (
    <div className="flex flex-col p-4">
      <div className="text-xl font-semibold">Ingredients: </div>
      {recipe.ingredients.map((ingredient: string, index: number) => (
        <li key={index} className="ml-4">
          <div>{ingredient}</div>
        </li>
      ))}
    </div>
  ) : null;

  const instructions: JSX.Element | null = recipe.instructions ? (
    <div className="px-4">
      <div className="text-xl font-semibold">Instructions: </div>
      {recipe.instructions.map((instruction: string, index: number) => (
        <div key={index}>
          <span className="font-semibold">{index + 1}. </span>
          {instruction}
        </div>
      ))}
    </div>
  ) : null;

  return (
    <>
      <div className="flex flex-col font-serif text-gray-700">
        <Link href={"/recipe"} className="flex items-center">
          <IoMdArrowRoundBack />
          <div className="px-2">Back to Browse</div>
        </Link>
        <div className="pt-4 text-4xl font-bold">{recipe.name}</div>
        <div className="py-2">{recipe.description}</div>
        <div className="my-2 flex flex-col rounded-md bg-gradient-to-br from-background-light to-background-dark px-10 py-4 text-lg">
          <li>
            <span className="font-semibold">Preparation: </span>
            {recipe.prepTime}&nbsp;minutes
          </li>
          <li>
            <span className="font-semibold">Cooking: </span>
            {recipe.cookTime}&nbsp;minutes
          </li>
          <li>
            <span className="font-semibold">Servings:</span> {recipe.servings}
          </li>
        </div>
        {ingredientsList}
        {instructions}
      </div>
    </>
  );
}
