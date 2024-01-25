import { Recipe } from "@/lib/types";
import { fetchRecipes } from "@/lib/api";

import { RecipeCard } from "@/components/RecipeCard";

export default async function RecipePage() {
  try {
    const recipes: Recipe[] = await fetchRecipes();

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
  } catch (err) {
    console.error("Error fetching recipes:", err);
    return (
      <p className="text-center text-2xl">
        Error loading recipes. Please try again later.
      </p>
    );
  }
}
