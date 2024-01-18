import express from "express";

const AuthRouter: express.Router = express.Router();

AuthRouter.use(express.json());

AuthRouter.get(
  "/validate",
  async (req: express.Request, res: express.Response) => {
    try {
    } catch (err) {
      res.status(501).json({ error: err });
      console.error(err);
    }
  }
);

AuthRouter.get(
  "/login",
  async (req: express.Request, res: express.Response) => {
    try {
    } catch (err) {
      res.status(501).json({ error: err });
      console.error(err);
    }
  }
);

AuthRouter.post(
  "/register",
  async (req: express.Request, res: express.Response) => {
    try {
    } catch (err) {
      res.status(501).json({ error: err });
      console.error(err);
    }
  }
);

export default AuthRouter;
