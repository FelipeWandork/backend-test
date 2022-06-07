import { Router } from "express";
import { InvestmentsRepository } from "../repositories/InvestmentsRepository";
import { CreateInvestmentService } from "../services/CreateInvestmentService";

const investmentsRoutes = Router();
const investmentsRepository = new InvestmentsRepository();

investmentsRoutes.post("/", (request, response) => {

    const { owner, amount } = request.body;

    const createInvestmentService = new CreateInvestmentService(investmentsRepository);

    createInvestmentService.execute({ owner, amount });

    return response.status(201).send();

});

investmentsRoutes.get("/", (request, response) => {

    return response.status(201).send();

});

export { investmentsRoutes };
