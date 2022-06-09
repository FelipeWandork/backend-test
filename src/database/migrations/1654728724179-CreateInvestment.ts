import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateInvestment1654728724179 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "investments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "owner",
                        type: "varchar",
                    },
                    {
                        name: "amount",
                        type: "decimal",
                    },
                    {
                        name: "date",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("investments");
    }
}