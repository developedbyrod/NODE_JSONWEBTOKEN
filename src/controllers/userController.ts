import { Request, Response } from "express"
import { AppDataSource } from "../config/dataSource"
import { User } from "../entities/User"
import { UserRepository } from "../repositories/UserRepository"

export const createUser = async (request: Request, response: Response) => {
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
