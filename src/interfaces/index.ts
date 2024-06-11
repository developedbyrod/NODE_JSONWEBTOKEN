import { User } from "../entities/User"

export interface IToken {
  iat: number
  exp: number
  sub: string
}

export interface IRequest {
  email: string
  password: string
}

export interface IResponse {
  user: User
  token: string
}

export interface ICreateUser{
    firstName: string
    lastName: string
    email:string
    password:string
}
