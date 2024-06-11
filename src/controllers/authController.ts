import { Request, Response } from "express"
import { signIn } from "../services/authService"

export async function login(request: Request, response: Response) {
  const { email, password } = request.body

  const user = await signIn({
    email, password
  });

  return response.json(user)
}
