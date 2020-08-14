import { Request, Response } from 'express';
import db from '../database/connection';
import convertHourToMin from '../Utils/convertHourToMin';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
};

export default class ClassesController {
    async index(request: Request, response: Response) {
        const filters = request.query;

        const week_day = filters.week_day as string;
        const subject = filters.subject as string;
        const time = filters.time as string;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return response.status(400).json({
                error: 'Missing filter to search classes'
            })
        }

        const timeMinutes = convertHourToMin(time);

        const classes = await db('classes')
            .whereExists(function () {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`class_schedule`.`from` <= ??', [timeMinutes])
                    .whereRaw('`class_schedule`.`to` > ??', [timeMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return response.json(classes);
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

        const trx = await db.transaction();

        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });

            const user_id = insertedUsersIds[0];

            const insertedClassesIds = await trx('classes').insert({
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
                });
            })

            await trx('class_schedule').insert(classeSchedule);

            await trx.commit();

            return response.status(201).send();

        } catch (error) {
            console.log(error);

            await trx.rollback();

            return response.status(400).json({
                error: 'Unexpected error while creating new classe'
            })
        }
    }
}