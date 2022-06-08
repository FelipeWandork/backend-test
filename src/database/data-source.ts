import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "investments",
    synchronize: false,
    logging: false,
    entities: [],
    subscribers: [],
    migrations: ["migrations/*.ts"],
})
/*
export function createConnection(host = "database"): Promise<DataSource> {
    return AppDataSource.setOptions({ host }).initialize();
}
  
export default AppDataSource
*/