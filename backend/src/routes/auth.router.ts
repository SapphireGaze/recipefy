import express from "express";

import UserModel from "../database/models/user.model";

const AuthRouter: express.Router = express.Router();

AuthRouter.use(express.json());

AuthRouter.get(
  "/validate",
  async (req: express.Request, res: express.Response) => {
    try {
      const token: string =
        (req.headers.authorization &&
          req.headers.authorization.split(" ")[1]) ||
        "";

      const _id: string = await UserModel.validateToken(token);

      res.status(200).json({ _id: _id });
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
      const { username, password } = req.body;

      const token: string = await UserModel.login(username, password);

      res.status(200).json({ token: token });
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
      const { email, username, password } = req.body;

      await UserModel.register(email, username, password);
      const token: string = await UserModel.login(username, password);

      res.status(200).json({ token: token });
    } catch (err) {
      res.status(501).json({ error: err });
      console.error(err);
    }
  }
);

export default AuthRouter;
