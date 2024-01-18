import express from "express";

import { IRecipe } from "../lib/types";
import RecipeModel from "../database/models/recipe.model";

const RecipeRouter: express.Router = express.Router();

RecipeRouter.use(express.json());

RecipeRouter.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const recipes: IRecipe[] = await RecipeModel.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(501).json({ error: err });
    console.error(err);
  }
});

RecipeRouter.get(
  "/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      const id: string = req.params.id;
      const recipe: IRecipe | null = await RecipeModel.findById(id);

      res.status(200).json(recipe);
    } catch (err) {
      res.status(501).json({ error: err });
      console.error(err);
    }
  }
);

RecipeRouter.post("/", async (req: express.Request, res: express.Response) => {
  try {
  } catch (err) {
    res.status(501).json({ error: err });
    console.error(err);
  }
});

export default RecipeRouter;
