import { Response,Request } from 'express';
import { EventService } from './../services/EventService';
import { Event } from '@prisma/client';



const eventService: EventService = new EventService();

export const createEvent = async (
    request: Request,
    response: Response
):Promise<Response> => {
    const data  = request.body;
         const date = data.date.split("-");

         data.date = new Date(
            date[0],
            date[1] - 1,
            date[2]
         );

         const event: Event = await eventService.createEvent(data);
             return response.status(201).json(event);
}


export const getEventById = async (
    request:Request,
    response: Response
):Promise<Response> => {
    const event = await eventService.getById(request.params.id);
    return response.status(200).json(event);
}


export const getEvents = async (
    request:Request,
    response: Response
):Promise<Response> => {
    const events = await eventService.getAll();
    return response.status(200).json(events);
}

    export const updateEvent = async (
        request: Request,
        response:Response
):Promise<Response> => {
        const event = await eventService.updateEvent(request.params.id, request.body);
        return response.status(200).json(event);
}

export const deleteEvent = async (
    request: Request,
    response:Response
):Promise<Response> =>{
    await eventService.deleteEvent(request.params.id);
    return response.status(204).json();
};
