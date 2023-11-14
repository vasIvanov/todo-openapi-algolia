import Router from "express-promise-router";
import { checkHealth } from "../controllers/healthController";

const healthRouter = Router();

healthRouter.get("/", checkHealth);

export default healthRouter;
