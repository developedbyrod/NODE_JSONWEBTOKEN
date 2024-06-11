import { DataSource } from "typeorm";
import dotenv from "dotenv"
import { User } from "../entities/User";
dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: 'postgres',
    password: 'GodIsGood',
    database: 'engehall',
    synchronize: true,
    logging: true,
    entities: [User],
    
})