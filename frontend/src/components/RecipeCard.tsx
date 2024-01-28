import Link from "next/link";

import { Recipe, Ingredient } from "@/lib/types";

const Ingredient: React.FC<Ingredient> = ({
  ingredient,
}: Ingredient): JSX.Element => {
  return (
    <>
      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
        {ingredient}
      </span>
    </>
  );
};

export const RecipeCard: React.FC<Recipe> = ({
  _id,
  name,
  description,
  ingredients,
}: Recipe): JSX.Element => {
  const ingredientsList: JSX.Element =
    ingredients.length > 5 ? (
      <>
        {ingredients.slice(0, 5).map((ingredient: string, index: number) => (
          <Ingredient key={index} ingredient={ingredient} />
        ))}
        <Ingredient ingredient={"..."} />
      </>
    ) : (
      <>
        {ingredients.map((ingredient: string, index: number) => (
          <Ingredient key={index} ingredient={ingredient} />
        ))}
      </>
    );

  return (
    <>
      <Link href={`/recipe/${_id}`}>
        <div
          id={_id}
          className="m-4 max-w-sm overflow-hidden rounded-md bg-foreground py-4 font-serif shadow-lg hover:animate-pulse"
        >
          <div className="px-6 py-4">
            <div className="mb-2 font-mono text-2xl font-bold">{name}</div>
            <p className="text-base">{description}</p>
          </div>
          <div className="px-6 pb-2 pt-4">{ingredientsList}</div>
        </div>
      </Link>
    </>
  );
};
