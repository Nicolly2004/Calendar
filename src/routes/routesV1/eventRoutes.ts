import { apiAuth } from './../../middlewares/apiAuth';
import { Router } from "express";
import * as eventController from "../../controllers/EventController"

const eventRoutes = Router();

eventRoutes.post('/events',apiAuth,eventController.createEvent)
eventRoutes.get("/events",eventController.getEvents)
eventRoutes.get("/events/:id",eventController.getEventById);  
eventRoutes.put("/events/:id",apiAuth,eventController.updateEvent); 
eventRoutes.delete("/events/:id",apiAuth,eventController.deleteEvent);

export {eventRoutes};