import { DataSource } from "typeorm";
import dotenv from "dotenv"
import { User } from "../entities/User";
dotenv.config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    synchronize: true,
    logging: true,
    entities: [User],
})