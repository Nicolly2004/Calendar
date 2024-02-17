import { Schema } from "express-validator";
import { UserService } from "../services/userService";

export const createUser: Schema = {
    email:{
        isEmail: true,
        notEmpty: true,
        custom:{
           options: async (value) => {
              const userService: UserService = new UserService();
              try{
                const user = await userService.getUserByEmail(value);
                if(user) {
                return false;
              }
              return true;
            }catch(error: any) {
                return true;
            }
          }
        },
    },
    name:{notEmpty:true, isLength:{
        options:{
            min:4,
        },
        errorMessage:"Informe seu nome e sobrenome",
    },
},
    senha:{
        isLength:{
            options:{
                min:8,
                max:20
            },
            errorMessage:"A senha deve conter de 8 a 20 caracteres",
        },
        notEmpty: true,
    },
    nameUser:{notEmpty: true, isLength:{
        options:{
            min:8,
            max:16
        },
        errorMessage: "Informe o nome de usuário"
    }}
}