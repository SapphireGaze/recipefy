import Link from "next/link";

import { Recipe, Ingredient } from "@/lib/types";

const Ingredient: React.FC<Ingredient> = ({ ingredient }: Ingredient) => {
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
}: Recipe) => {
  return (
    <>
      <Link href={`/recipe/${_id}`}>
        <div
          id=""
          className="m-4 max-w-sm overflow-hidden rounded-md shadow-lg hover:animate-pulse"
        >
          <div className="px-6 py-4">
            <div className="mb-2 font-serif text-2xl font-bold">{name}</div>
            <p className="text-base">{description}</p>
          </div>
          <div className="px-6 pb-2 pt-4">
            {ingredients.map((ingredient, index) => (
              <Ingredient key={index} ingredient={ingredient} />
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};
