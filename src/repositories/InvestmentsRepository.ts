import { Investment } from '../model/Investment';

class InvestmentsRepository {

    create({ owner, amount }: ICreateInvestment): void {
        const investment = new Investment();

        Object.assign(investment, {
            owner,
            amount
        });
    }
}

export { InvestmentsRepository };