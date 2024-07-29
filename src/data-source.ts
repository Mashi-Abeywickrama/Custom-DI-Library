import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./domain/entity/user"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT as string, 10),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_DATABASE,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
