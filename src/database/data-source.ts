import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin2022",
    database: "Investments",
    synchronize: false,
    logging: false,
    entities: [],
    subscribers: [],
    migrations: ["/src/database/migrations/*.ts"],
})

export function createConnection(host = "database"): Promise<DataSource> {
    return AppDataSource.setOptions({ host }).initialize();
}
  
// export default AppDataSource