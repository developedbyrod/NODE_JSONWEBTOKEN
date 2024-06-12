import { NextFunction, Request, Response } from "express";
import auth from "../config/auth";
import AppError from "../exceptions/AppError";
import { verify } from "jsonwebtoken";
import { IToken } from "../interfaces";

declare module 'express-serve-static-core'{
    interface Request{
        user?:{
            id: string
        }
    }
}


export default function authMiddlware(request: Request, response: Response, nextFn: NextFunction) : void {

    const authHeader = request.headers.authorization
    const secret = auth.jwt.secret

    if(!authHeader) throw new AppError("JWT Token is Missing or invalid.", 403)
    if(!secret) throw new AppError("Jwt is missing.", 403)

        
    const [, token] = authHeader.split(" ")

    try{

        const decoded = verify(token, secret)
        const {sub} = decoded as IToken

        let {user} = request;
        user = {
            id: sub
        }

        return nextFn()

    }catch(error){
        throw new AppError("Invalid JWT Token.", 403)
    }
}