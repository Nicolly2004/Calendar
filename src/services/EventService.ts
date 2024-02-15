import { NotFoundException } from '../exceptions/NotFoundException';
import { PasswordEncoder } from './PasswordEncoder';
import { Event, PrismaClient } from "@prisma/client";




interface StoreEvent extends Omit<Event, "id" | "createdAt" | "updatedAt"> {}
interface UpdateEvent extends Partial<Event>{}

export class EventService {
    private readonly passwordEncoder: PasswordEncoder;
    private readonly prisma: PrismaClient;

    constructor(){
        this.passwordEncoder = new PasswordEncoder();
        this.prisma = new PrismaClient();
    }

    async getEvents():Promise<Event[]> {
        return this.prisma.event.findMany();
    }

    async createEvent(data:StoreEvent):Promise<Event> {
       data.date = new Date(data.date)
       return this.prisma.event.create({data});
    }

    async getEventById(id:string):Promise<Event> {
        const event: Event | null = await this.prisma.event.findFirst({
            where:{
                id,
            }
        });

        if(!event){
            throw new NotFoundException("Evento não encontrado")
        }

        return event;
    }

    async updateEvent(id:string, data:UpdateEvent):Promise<Event>{
        const event: Event | null = await this.prisma.event.update({
            where:{
                id,
            },
            data,
        });

        return event;

    }

    async deleteEvent(id:string):Promise<void>{
        await this.prisma.event.delete({
            where:{
                id,
            },
        });
        
    }

}