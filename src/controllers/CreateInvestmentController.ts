import { Request, Response } from "express";
import { CreateInvestmentService } from "../services/CreateInvestmentService";

export class CreateInvestmentController {
    
   async handle(request: Request, response: Response) {

       const { owner, amount } = request.body;

       const service = new CreateInvestmentService();

       const result = await service.execute({ owner, amount });

       if(result instanceof Error){

           return response.status(400).json(result.message);

       }

       return response.json(result);

   }

}