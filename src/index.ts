
import express, { Express, Request, Response, response } from "express";
import dotenv from "dotenv";
import cors from "cors"
import routesV1 from "./routes/routesV1";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    cors({
        origin: ["*"]
    })
);
app.use('/api/v1',routesV1);

app.get('/',(req,res) =>{
    res.status(200).json(
        JSON.stringify({
            message: "Hello World",
        })
    );
})

app.use((req: Request,res: Response) => {
    response.status(404).json(
        JSON.stringify({
            error: "Not Found",
            message: "Rota não encontrada",
         })
    );
});


app.listen(process.env.PORT,() => {
    console.log(`Servidor está rodando em: ${process.env.HOST}:${process.env.PORT}`)
})