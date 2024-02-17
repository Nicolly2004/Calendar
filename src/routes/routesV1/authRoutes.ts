import { Router } from "express";
import { login } from "../../controllers/userController";

const authRoutes = Router();
//@todo(tudu) criar método de login

authRoutes.post('/login', login);
 
export  {authRoutes};