import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import AuthRouter from "./routes/auth.router";
import RecipeRouter from "./routes/recipe.router";

require("dotenv").config();
const port: number = Number(process.env.PORT) || 3030;

mongoose
  .connect(process.env.DB_HOST as string)
  .then(() => console.log("Connected to database!"))
  .catch((error) => console.error("Error connecting to database:", error));

const app: express.Express = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://127.0.0.1:3000"],
    methods: ["GET", "POST"],
  })
);

app.use("/api/auth", AuthRouter);
app.use("/api/recipe", RecipeRouter);

// endpoint for connection testing
app.get("/test", (req: express.Request, res: express.Response) => {
  console.log(req.hostname, "sent a request");
  res.status(200).json({
    message: "Recipefy backend is listening...",
  });
});

// start app listener
app.listen(port, () => {
  console.log(`Recipefy backend now listening on port ${port}.`);
});
