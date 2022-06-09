import { getRepository, Repository } from 'typeorm';
import { Investment } from '../database/entity/Investment';
import { ICreateInvestment } from "../interfaces/ICreateInvestment";

class InvestmentsRepository implements ICreateInvestment {

    owner: string;
    amount: number;

    private repository: Repository<Investment>;

    constructor() {
        this.repository = getRepository(Investment);
    }

    async create({ owner, amount }: ICreateInvestment): Promise<void> {
        const investment = this.repository.create({
            owner,
            amount,
        });

        await this.repository.save(investment);
        
    }

    async list(): Promise<Investment[]> {
        const investments = await this.repository.find();
        return investments;
    }

    async findByName(owner: string): Promise<Investment> {
        const investment = await this.repository.findOne({ owner });
        return investment;
    }
}

export { InvestmentsRepository };