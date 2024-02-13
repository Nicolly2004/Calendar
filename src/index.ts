
import express, { Express, Request, Response, response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const data = new Date();
const uuid = require('uuid');
console.log(uuid.v4());


app.use((req: Request,res: Response) => {
    response.status(404);
});

app.listen(process.env.PORT,() => {
    console.log(`Servidor está rodando em: ${process.env.HOST}${process.env.PORT}`)
})