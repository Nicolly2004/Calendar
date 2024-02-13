import { Router, response } from "express";
import { v4 as uuidV4} from "uuid";


const eventRoutes = Router();

interface Event {
    id: string,
    name: string,
    
}

let events: Event[] = [];

//listar
eventRoutes.get('/event', (request,response) => {
    response.status(200).json(events)
});

//criar
eventRoutes.post('/event', (request,response) => {
    const event = request.body
    event.id = uuidV4();
    events.push(event);

    response.status(201).json(events)
})

//listar por id
eventRoutes.get('/event/:id', (request,response) => {
    const {id} = request.params;
    const event = events.find(event => event.id === id)

    if(!event)
      response.status(404).json({error:true, message: 'Evento não exite!!'})

      response.status(200).json(event)
});

//atualizar por id
eventRoutes.put('/event/:id',(request,response) => {
    const {id} = request.params;
    const {name} = request.body;
    const event = events.find(event => event.id === id)

    if(!event)
      response.status(404).json({error:true, message: 'Evento não exite!!'})

      Object.assign(event, {
        name,
        id
      })

      response.status(200).json(event)
})

eventRoutes.delete('/event/:id', (request,response) => {
    const {id} = request.params;
    const event = events.find(event => event.id === id)

    if(!event)
      response.status(404).json({error:true, message: 'Evento não existe!!'})

    const newEvent = events.filter(event => event.id !== id)
    events = newEvent;

    response.status(204).send();
 
})

export default eventRoutes;