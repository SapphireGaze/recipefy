"use client";
import { useEffect, useState } from "react";

import { Recipe } from "@/lib/types";
import { fetchRecipes } from "@/lib/api";

import { RecipeCard } from "@/components/RecipeCard";

export default function RecipePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<JSX.Element | undefined> => {
      try {
        const fetchedRecipes: Recipe[] = await fetchRecipes();
        setRecipes(fetchedRecipes);
      } catch (err) {
        console.error("Error fetching recipes:", err);
        return (
          <p className="text-center text-2xl">
            Error loading recipes. Please try again later.
          </p>
        );
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {recipes.length === 0 && (
        <p className="text-center text-2xl">
          No recipes available yet. Create your very own recipe today!
        </p>
      )}
      <div className="flex flex-wrap justify-between">
        {recipes.map((recipe: Recipe, index: number) => (
          <div key={index}>
            <RecipeCard
              _id={recipe._id}
              name={recipe.name}
              description={recipe.description}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              prepTime={recipe.prepTime}
              cookTime={recipe.cookTime}
              servings={recipe.servings}
            />
          </div>
        ))}
      </div>
    </>
  );
}
