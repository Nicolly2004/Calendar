import { NotFoundException } from '../exceptions/NotFoundException';
import { PasswordEncoder } from './PasswordEncoder';
import { Event, PrismaClient } from "@prisma/client";




interface CreateEvent extends Omit<Event, "id" | "createdAt" | "updatedAt"> {}
interface UpdateEvent extends Partial<CreateEvent>{
    id: string;
}

export class EventService {
    private readonly prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async createEvent(event:CreateEvent):Promise<Event> {
       return await this.prisma.event.create({
        data: event,
    });
    }

    async updateEvent(id:string, event:UpdateEvent):Promise<Event>{
        return await this.prisma.event.update({
            data: event,
            where:{
                id,
            },
        });
     }

    async getAll(): Promise<Event[]> {
        return await this.prisma.event.findMany();
    }
    async getById(id:string):Promise<Event> {
        const event = await this.prisma.event.findFirst({
         where:{id : id},
        });

        if(event === null) {
            throw new NotFoundException("Evento não encontrado")
        }
        return event;
    }

    async deleteEvent(id:string):Promise<void>{
        const event = this.getById(id);
         this.prisma.event.delete({
            where:{
                id,
            },
        });
        
    }

}