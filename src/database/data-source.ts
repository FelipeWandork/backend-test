import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "investments",
    synchronize: false,
    entities: ["database/entity/*.ts"],
    migrations: ["database/migrations/*.ts"],
    migrationsTableName: "investments",
})

export function createConnection(host = "localhost"): Promise<DataSource> {
    return AppDataSource.setOptions({ host }).initialize();
}

export default AppDataSource