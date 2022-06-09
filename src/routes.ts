import { Router } from "express";
import { CreateInvestmentController } from "./controllers/CreateInvestmentController";

const routes = Router();

routes.post("/investments", new CreateInvestmentController().handle);

export { routes };