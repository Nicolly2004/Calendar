import { Router } from "express";

const eventRoutes = Router();

eventRoutes.post('/events', (req,res) => {
    res.send("Cadastra um evento")
  });
  
eventRoutes.get("/events", (req,res) => {
    res.send("Lista todos os evento")
  });
  
eventRoutes.get("/events/:id", (req,res) => {
    res.send("Lista evento por id")
  });
  
eventRoutes.put("/events/:id",(req,res) => {
    res.send("Atualiza evento por id")
  });
  
eventRoutes.delete("/events/:id", (req,res) =>{
    res.send("Deleta evento por id")
  });

export {eventRoutes};