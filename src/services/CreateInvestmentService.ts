import "reflect-metadata";
import dataSource from "../database/data-source";
import { Investment } from "../database/entity/Investment";

type InvestmentRequest = {
    owner: string;
    amount: number;
    date: Date;
}

export class CreateInvestmentService {
    async execute({ owner, amount, date }: InvestmentRequest): Promise<Investment> {
        
        const repository = dataSource.getRepository(Investment);
        const investment = repository.create({
            owner,
            amount,
            date,
        });

        console.log(investment);

        return investment;
    }
}