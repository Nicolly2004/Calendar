import { NextFunction, Request,Response } from "express";
import { UnauthorizedException } from "../exceptions/UnauthorizedException";
import { UserService } from "../services/userService";
import { verifyToken } from "../utils/verifyToken";


export const apiAuth =  async (
    request: any,
    response: Response,
    next: NextFunction
) => {

    const authorization = request.headers.authorization;

    if(authorization == null || typeof authorization("undefined")){
        next(new UnauthorizedException("Acesso não autorizado"));
    }

    const headerArray = authorization.split("");
    if(headerArray[0] != "Bearer"){
        next(new UnauthorizedException("Acesso não autorizado"));
    }

    const token = headerArray[1];

    if(!token) {
        next(new UnauthorizedException("Acesso não autorizado"));
    }

    try{
        const userService: UserService = new UserService();
        const {email} =  verifyToken(token);
        const user = userService.getUserByEmail(email);
        request.user = user;
        next();
    }catch(error:any){
        next(new UnauthorizedException(error.message));
    }
}