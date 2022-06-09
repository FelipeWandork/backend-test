import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("investments")
class Investment {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    owner: string;

    @Column("decimal")
    amount: number;

    @CreateDateColumn()
    date: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Investment };