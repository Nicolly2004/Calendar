import { Router } from "express";
import * as eventController from './../../controllers/EventController'
const eventRoutes = Router();

eventRoutes.post('/events',eventController.saveEvent)
eventRoutes.get('events',eventController.getEvents)
eventRoutes.get('events',eventController.getEvent)
eventRoutes.put('/events/:id',eventController.getEvent)
eventRoutes.delete('events/:id',eventController.getEvent)


export {eventRoutes};