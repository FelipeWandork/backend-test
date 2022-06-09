import { DataSource } from "typeorm";
import { Investment } from "./entity/Investment";
import { CreateInvestment1654728724179 } from "./migrations/1654728724179-CreateInvestment";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "investments",
    entities: [ Investment ],
    migrations: [ CreateInvestment1654728724179 ],
})

export function createConnection(host = "localhost"): Promise<DataSource> {
    return AppDataSource.setOptions({ host }).initialize();
}

export default AppDataSource