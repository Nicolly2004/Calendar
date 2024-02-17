import * as userController from '../../controllers/userController';
import { Router } from "express";
import { requestValidation } from '../../middlewares/requestValidation';
import { createUser } from '../../validations/CreatUser';
import { exceptionHandler } from '../../middlewares/exceptionHandler';
import { apiAuth } from '../../middlewares/apiAuth';

const userRoutes = Router();

userRoutes.post(
    "/users",
    requestValidation(createUser),
    userController.saveUser
);

userRoutes.get("/users",apiAuth,userController.getUsers)

userRoutes.get(
    "/users/:id",
    apiAuth
    ,exceptionHandler
    ,userController.getUser
);

  

export {userRoutes};