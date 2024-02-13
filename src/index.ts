
import express, { Express, Request, Response, response } from "express";
import dotenv from "dotenv";
import routesV1 from "./routes/routesV1";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/api/v1',routesV1);

app.get('/',(req,res) =>{
    res.send("Hello World");
})

app.use((req: Request,res: Response) => {
    response.status(404);
    res.send("Desculpe, rota não encontrada");
});


app.listen(process.env.PORT,() => {
    console.log(`Servidor está rodando em: ${process.env.HOST}:${process.env.PORT}`)
})