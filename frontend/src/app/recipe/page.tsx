"use client";
import { useEffect, useState } from "react";

import { Recipe } from "@/lib/types";
import { fetchRecipes } from "@/lib/api";

import { RecipeCard } from "@/components/RecipeCard";
import { Loading } from "@/components/Loading";

export default function RecipePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async (): Promise<JSX.Element | undefined> => {
      try {
        const fetchedRecipes: Recipe[] = await fetchRecipes();
        setRecipes(fetchedRecipes);
        setLoading(false);
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

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-wrap justify-between">
        {recipes.map((recipe: Recipe, index: number) => (
          <div key={index}>
            <RecipeCard
              _id={recipe._id}
              name={recipe.name}
              author={recipe.author}
              description={recipe.description}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              prepTime={recipe.prepTime}
              cookTime={recipe.cookTime}
              servings={recipe.servings}
            />
          </div>
        ))}
        {!loading && recipes.length === 0 && (
          <p className="text-center text-2xl">
            No recipes available yet. Create your very own recipe today!
          </p>
        )}
      </div>
    </>
  );
}
