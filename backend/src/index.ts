import express, { NextFunction } from "express";
import mongoose from "mongoose";

import AuthRouter from "./routes/auth.router";
import RecipeRouter from "./routes/recipe.router";

require("dotenv").config();
const port: number = Number(process.env.PORT) || 3030;

mongoose
  .connect(process.env.DB_HOST as string)
  .then(() => console.log("Connected to database!"))
  .catch((err) =>
    console.error("Error connecting to database:", (err as Error).message)
  );

const app: express.Express = express();

app.use(express.json());

// set up cross origin resource sharing
app.use((req: express.Request, res: express.Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", [
    "Content-Type",
    "Authorization",
  ]);
  next();
});

app.use("/api/auth", AuthRouter);
app.use("/api/recipe", RecipeRouter);

// endpoint for connection testing
app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.hostname, "sent a request");
  res.status(200).json({
    message: "Recipefy backend is listening...",
  });
});

// start app listener
app.listen(port, () => {
  console.log(`Recipefy backend now listening on port ${port}.`);
});
