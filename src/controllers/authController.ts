import { Request, Response } from "express"
import { signIn } from "../services/authService"
import { AppDataSource } from "../config/dataSource";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export async function authLogin(request: Request, response: Response) {

  const { email, password } = request.body

  const user = await signIn({
    email, password
  });

  return response.json(user)
}

export const authRegister = async (request: Request, response: Response) => {
  const { firstName, lastName, email, password } = request.body

  const userRepository =
    AppDataSource.getRepository(User).extend(UserRepository)

  const user =  userRepository.create({
    firstName,
    lastName,
    email,
    password,
  })

  return response.json(user)
}
