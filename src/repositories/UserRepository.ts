
import { User } from "../entities/User";
import { AppDataSource } from "../config/dataSource";

export const UserRepository = AppDataSource.getRepository(User).extend({
   
    async findByEmail(email: string): Promise<User | null> {
        return await this.findOneBy({ email });
    },
    
});

