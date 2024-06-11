import { hash } from "bcryptjs";
import AppError from "../exceptions/AppError";
import { UserRepository } from "../repositories/UserRepository";
import { AppDataSource } from "../config/dataSource";
import { User } from "../entities/User";
import { ICreateUser } from "../interfaces";

export const createUserService = async ({firstName, lastName, email, password} : ICreateUser) => {

    const userRepository = AppDataSource.getRepository(User).extend(UserRepository)
    const emailExists = await UserRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('E-mail address already used.', 400);
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await userRepository.save(user);

    return user;
}