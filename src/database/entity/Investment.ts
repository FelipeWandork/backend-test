import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Investments")
export default class Investment {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    owner: string;

    @Column("decimal")
    amount: number;

    @Column("timestamp")
    date: Date;
}