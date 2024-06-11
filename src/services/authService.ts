import AppError from "../exceptions/AppError";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import auth from "../config/auth";
import { AppDataSource } from "../config/dataSource";
import { IRequest } from "../interfaces";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";

export async function signIn({ email, password }: IRequest) {
  const { secret, expiresIn } = auth.jwt;

  if (!secret || !expiresIn) {
    throw new AppError("JWT Secret or Token Expires not found.", 400);
  }

  const userRepository = AppDataSource.getRepository(User).extend(UserRepository);

  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw new AppError("Incorrect email/password combination.", 403);
  }

  const passwordConfirmed = await compare(password, user.password);

  if (!passwordConfirmed) {
    throw new AppError("Incorrect email/password combination.", 401);
  }


  const token = sign({ userId: user.id }, secret, {
    subject: user.id.toString(),
    expiresIn: expiresIn,
  });

  const userResponse = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };

  return {
    user: userResponse,
    token,
  };
}
