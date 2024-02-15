import { Response,Request } from 'express';
import { EventService } from './../services/EventService';
import { Event } from '@prisma/client';



const eventService: EventService = new EventService();

export const getEvents = async (
    request: Request,
    response: Response
):Promise<Response> => {
    const events: Event[] = await eventService.getEvents();
    return response.status(200).json(events);
}

export const getEvent = async (
    request:Request,
    response: Response
):Promise<Response> => {
    const id: string = request.params.id;

    try{
        const event: Event = await eventService.getEventById(id);
        return response.status(200).json(event);
    }catch (e:any) {
        return response.status(200).json({
            message: e.message,
        });
    }
}

    export const saveEvent = async (
        request: Request,
        response:Response
):Promise<Response> => {
         const data = request.body;
         const date = data.date.split("-");

         data.date = new Date(
            date[0],
            date[1] - 1,
            date[2]
         );

         const event: Event = await eventService.createEvent(data);
             return response.status(201).json(event);
}
