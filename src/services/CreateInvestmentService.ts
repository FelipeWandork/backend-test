import { InvestmentsRepository } from "../repositories/InvestmentsRepository";

class CreateInvestmentService {

    constructor(private investmentsRepository: InvestmentsRepository) {

    }

    execute({ owner, amount }: IRequest) {

        this.investmentsRepository.create({ owner, amount });

    }

}

export { CreateInvestmentService };