import * as userController from './../../controllers/UserController';
import { Router } from "express";

const userRoutes = Router();

userRoutes.post('/users',userController.saveUser)
userRoutes.get("/users",userController.getUsers)
userRoutes.get("/users/:id",userController.getUser)
userRoutes.put("/users/:id",userController.getUser)
userRoutes.delete("/users/:id",userController.getUser)
  

export {userRoutes};