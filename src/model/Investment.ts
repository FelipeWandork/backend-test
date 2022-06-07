import { v4 as uuidV4 } from "uuid";

class Investment {
    id?: string;
    owner: string;
    amount: number;
    date: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Investment };