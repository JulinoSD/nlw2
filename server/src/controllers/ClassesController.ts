import { Request, Response, request, response } from 'express';
import db from '../database/connection';
import convertHourToMin from '../Utils/convertHourToMin';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
};

export default class ClassesController {
    async index(request:Request, response: Response){
        const filters = request.query;

        

        if(!filters.week_day ||!filters.subject ||!filters.time){
            return response.status(400).json({
                error:'Missing filter to search classes'                
            })
        }
        const timeMinutes = convertHourToMin(filters.time as string);
        
        const classes = await db('classes')
            .where('classes.subject', '=', filters.subject as string)
        return response.send();
    }
    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        try {
            const trx = await db.transaction();

            const insertedUsersIds =
                await trx('users').insert({
                    name,
                    avatar,
                    whatsapp,
                    bio
                });

            const user_id = insertedUsersIds[0];

            const insertedClassesIds = await trx('/classes').insert({
                subject,
                cost,
                user_id
            });

            const classe_id = insertedClassesIds[0];

            const classeSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return ({
                    classe_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMin(scheduleItem.from),
                    to: convertHourToMin(scheduleItem.to),
                })
            })

            await trx('class_schedule').insert(classeSchedule);
            await trx.commit();

            return response.send()
        } catch (err) {
            return response.status(400).json({
                error: 'Unexpected error'
            })
        }
    }
}