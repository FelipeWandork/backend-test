import "reflect-metadata"
import { DataSource } from "typeorm"
import { Investment } from "./entity/Investment"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "investments",
    entities: [Investment],
    synchronize: true,
    logging: false,
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))