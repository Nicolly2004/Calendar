import * as bcrypt from "bcrypt"

export class PasswordEncoder{

    //define a força da criptografia
    private readonly saltRounds = 16;

     //passa a senha digitada e pelo usuário e retorna string com hash
    async encode(password:string): Promise<string>{
        return await bcrypt.hash(password,this.saltRounds);
    }
    
    //verifica a senha - compare - se for a senha certa,retorna um boolean
    async matches(password: string, hash:string): Promise<boolean>{
        return await bcrypt.compare(password,hash);
    }

}