import  express from "express" ;


const routesV1 = express.Router();

//usuarios
routesV1.post('/users', (req,res) => {
  res.send("Cadastra um usuário")
});

routesV1.post('/users/login', (req,res) => {
  res.send("Realiza Login")
});

routesV1.get("/users", (req,res) => {
  res.send("Lista todos os usuários")
});

routesV1.get("/users/:id", (req,res) => {
  res.send("Lista usuário por id")
});

routesV1.put("/users/:id",(req,res) => {
  res.send("Atualiza usuário por id")
});

routesV1.delete("/users/:id", (req,res) =>{
  res.send("Deleta usuário por id")
});


//eventos
routesV1.post('/events', (req,res) => {
  res.send("Cadastra um evento")
});

routesV1.get("/events", (req,res) => {
  res.send("Lista todos os evento")
});

routesV1.get("/events/:id", (req,res) => {
  res.send("Lista evento por id")
});

routesV1.put("/events/:id",(req,res) => {
  res.send("Atualiza evento por id")
});

routesV1.delete("/events/:id", (req,res) =>{
  res.send("Deleta evento por id")
});


export default routesV1;