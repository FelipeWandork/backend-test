import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("investments")
export class Investment {
    @PrimaryColumn("uuid")
    id: string

    @Column()
    owner: string

    @Column("decimal")
    amount: number

    @Column({ type: "timestamptz" })
    date: Date

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}