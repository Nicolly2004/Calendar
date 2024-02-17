
import express, { Express, Request, Response, response } from "express";
import dotenv from "dotenv";
import cors from "cors"
import routesV1 from "./routes/routesV1";
import { exceptionHandler } from "./middlewares/exceptionHandler";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use((req,res,next) => {
    console.log(`[${req.method}] ${req.path}`);
    next();
})

app.use(
    cors({
        origin: ["*"],
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

app.use(exceptionHandler); 

app.use((req,res) => {
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